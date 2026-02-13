import { Component } from '@angular/core';

@Component({
  selector: 'app-sip-calculator',
  imports: [],
  templateUrl: './sip-calculator.html',
  styleUrl: './sip-calculator.css',
})
export class SipCalculator {
  title: string = "SIP Returns Calculator";

  //Input parameters
  monthlyAmount: number = 5000;
  investmentPeriod: number = 10; //in years
  expectedReturnRate: number = 12; //percentage

  //Calculated results
  totalInvestment: number = this.monthlyAmount * 12 * this.investmentPeriod;
  maturityAmount = 1162000; //Simplified calculation for now
  estimatedReturns = this.maturityAmount - this.totalInvestment;
}
