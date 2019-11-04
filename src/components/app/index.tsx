import React from 'react';
import s from './style.scss';

import TransactionCategories from '../transaction/categories';
import TransactionSearch from '../transaction/search';

const App: React.FC = () => <div className={s.container}>
  <div className={s.row}>
    <TransactionSearch/>
  </div>
  <div className={s.row}>
    <TransactionCategories/>
  </div>
</div>;

export default App;
