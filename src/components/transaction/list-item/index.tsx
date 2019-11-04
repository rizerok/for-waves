import React, { useState } from 'react';
import c from 'classnames';
import s from './style.scss';

import { Transaction } from 'types/transactions';
import UiButton from 'components/ui/button';
import useOnloadImage from './onload-image';

const TransactionListItem: React.FC<Transaction> = ({ dApp, timestamp }: Transaction) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const measuredRef = useOnloadImage(setImageLoaded);
  return (
    <div className={s.item}>
      <div>
        <img
          className={c(s.image, {
            [s.loaded]: imageLoaded
          })}
          src="https://picsum.photos/410/200"
          alt={dApp}
          ref={measuredRef}
        />
      </div>
      <div className={s.textContent}>
        <div className={c(s.row, s.gray)}>Service • Voting</div>
        <div className={c(s.row, s.title)}>{dApp}</div>
        <div className={c(s.row, s.gray)}>{`by Author`}</div>
        <div className={c(s.row, s.double)}>{timestamp}</div>
        <div className={c(s.row, s.between)}>
          <UiButton>vote</UiButton>
          <button className={s.menuButton}></button>
        </div>
        <div className={c(s.row, s.gray)}>
          3 participants
        </div>
      </div>
    </div>
  );
};

export default TransactionListItem;
