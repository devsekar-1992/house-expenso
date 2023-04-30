export class Bank{
  public bankId!: string;
  public bankName!: string;
  constructor(bankId: string,bankName: string){
    this.bankId = bankId;
    this.bankName = bankName;
  }
}
