export interface Address {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  address: string;
  created_at: string;
  updated_at: string;
}

export interface AddressState {
  addresses: Address[];
  loading: boolean;
  error: string | null;
  selectedAddress: Address | null;
}
