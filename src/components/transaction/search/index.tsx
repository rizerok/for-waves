import React, { useRef } from 'react';
import { connect } from 'react-redux';

import { getTransactions, selectEmptySearch } from 'store/transactions';
import { AppState } from 'store/reducers';

import s from './style.scss';

import UiButton from '../../ui/button';

interface ConnectedPropsInterface {
  isEmptySearch: boolean;
}

interface DispatchPropsInterface {
  getTransactions: (walletId: string) => void;
}

type PropsInterface = ConnectedPropsInterface & DispatchPropsInterface;

const TransactionSearch: React.FC<PropsInterface> = (
  { isEmptySearch, getTransactions }: PropsInterface
) => {
  const input = useRef<HTMLInputElement>(null);
  return (
    <div className={s.container}>
      <div>
        <label className={s.label}>Wallet ID</label>
      </div>
      <div>
        <input
          ref={input}
          className={s.input}
          type="text"
          defaultValue="3N34g5LNjXcZAetGAP4fYPJjv7TdVCjCj9e"
        />
      </div>
      {isEmptySearch && <div className={s.emptySearch}>
        <span>Кошелек с данным Wallet ID отсутствует</span>
      </div>}
      <div>
        <UiButton
          className={s.button}
          onClick={(): void => {
            if (input.current) {
              getTransactions(input.current.value);
            }
          }}
        >Search</UiButton>
      </div>
    </div>
  );
};

const mapState = ({ transactions }: AppState): ConnectedPropsInterface => ({
  isEmptySearch: selectEmptySearch(transactions)
});

const mapDispatch = {
  getTransactions
};

export default connect(mapState, mapDispatch)(TransactionSearch);
