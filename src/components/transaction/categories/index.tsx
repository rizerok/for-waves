import React from 'react';
import { connect } from 'react-redux';

import { TransactionCategories as TransactionCategoriesType } from 'types/transactions';
import { AppState } from 'store/reducers';

import { selectCategories } from 'store/transactions';
import TransactionList from '../list';

import s from './style.scss';

interface PropsInterface {
  categories: TransactionCategoriesType;
}

const TransactionCategories: React.FC<PropsInterface> = ({ categories }: PropsInterface) => {
  return (
    <div>
      { categories.map((categories, key) => (
        <div key={key} className={s.category}>
          <div className={s.title}>
            {`${categories.title} • ${categories.list.length}`}
          </div>
          {categories.showList && !!categories.list.length && <div className={s.list}>
            <TransactionList list={categories.list}/>
          </div>}
        </div>
      )) }
    </div>
  );
};

const mapProps = ({ transactions }: AppState): PropsInterface => {
  return {
    categories: selectCategories(transactions, [
      { type: 4 },
      { type: 16 }
    ])
  };
};

export default connect(mapProps)(TransactionCategories);
