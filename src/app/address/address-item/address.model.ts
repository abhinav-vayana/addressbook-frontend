export interface Address {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  address: string;
  // created_at: number;
  // updated_at: number;
}
export interface AddressState {
  addresses: Address[];
  loading: boolean;
  error: string | null;
}
