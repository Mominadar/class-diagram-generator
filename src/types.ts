export type Value = {
  id:string;
  name: string;
  dataType: string;
  keyType: string;
};

export type ClassElement = {
  className: string;
  attributes: Value[];
};
