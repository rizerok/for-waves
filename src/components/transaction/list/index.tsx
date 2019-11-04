import React from 'react';

import s from './style.scss';

import TransactionListItem from '../list-item';

import { TransactionList as TransactionListType } from 'types/transactions';


interface PropsInterface {
  list: TransactionListType;
}

const TransactionList: React.FC<PropsInterface> = ({ list }: PropsInterface) => {
  return (
    <div className={s.list}>
      { list.map((item, key) => <div key={key} className={s.item}>
        <TransactionListItem {...item.data}/>
      </div>) }
    </div>
  );
};

export default TransactionList;
