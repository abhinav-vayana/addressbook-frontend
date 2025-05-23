export interface Address {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  address: string;
}

export interface AddressState {
  addresses: Address[];
  loading: boolean;
  error: string | null;
}
