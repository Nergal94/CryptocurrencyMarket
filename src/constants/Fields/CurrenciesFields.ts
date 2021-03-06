import {FieldsItem} from "@/models/FieldsItem";


export const CurrenciesFields: FieldsItem[] =  [
  {
    value: 'currency',
    label: 'Currency',
    sortable: true
  },
  {
    value: 'price',
    label: 'Price',
    sortable: true
  },
  {
    value: 'dayChange',
    label: '24h %',
    sortable: true
  },
  {
    value: 'weekChange',
    label: '7d %',
    sortable: true
  },
  {
    value: 'market_cap',
    label: 'Market Cap',
    sortable: true
  },
  {
    value: 'volume',
    label: 'Volume(24h)',
    sortable: true
  }
];
