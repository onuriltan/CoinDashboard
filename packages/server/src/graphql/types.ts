export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};


export enum Fiat {
  Usd = 'USD',
  Eur = 'EUR'
}

export type CoinValues = {
   __typename?: 'CoinValues';
  date?: Maybe<Scalars['Date']>;
  value?: Maybe<Scalars['Float']>;
};

export type History = {
   __typename?: 'History';
  fiat: Fiat;
  period: Scalars['String'];
  values: Array<Maybe<CoinValues>>;
};

export type Query = {
   __typename?: 'Query';
  history: History;
};


export type QueryHistoryArgs = {
  timeSpan: Scalars['String'];
};

