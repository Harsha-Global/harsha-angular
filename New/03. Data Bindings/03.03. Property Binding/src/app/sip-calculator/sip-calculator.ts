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
  
  //For safe navigation demo
  fundName: string | null = null;

  //Calculated results
  totalInvestment: number = this.monthlyAmount * 12 * this.investmentPeriod;
  maturityAmount : number = 1162000; //Simplified calculation for now
  estimatedReturns : number = this.maturityAmount - this.totalInvestment;

  //For property binding examples
  logoUrl: string = "assets/logo.png";
  buttonTooltip: string = "Click to calculate your SIP returns";

  //Simple calculation method
  calculateYearlyInvestment(): number
  {
    return this.monthlyAmount * 12;
  }
}
