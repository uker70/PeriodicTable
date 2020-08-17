import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {NobleGasNonmetal, Element, NonmetalNonmetal, HalogensNonmetal, ActinidesMetal, AlkaliMetal, AlkalineEarthMetal, LanthanidesMetal, MetalloidsMetal, PostTransitionMetal, TransitionMetal} from "../elements/index";

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.css']
})
export class PeriodicTableComponent implements OnInit {

  
  apiData$: Element[] = [];
  atomicMassTmp: string;
  rowCounter = 1;
  done = false;
  tmp: Element[] = [];

  constructor(private http: HttpService) { }

  getSpecificItems(a: number, b: number){
    if (a == 1 && b == 2)
    {
      this.tmp = this.apiData$.filter(e => e.atomicNumber >= a && e.atomicNumber <= b);
      this.tmp[17] = this.tmp[1];
      this.tmp.fill(null, 1, 16);
      return this.tmp;
    }
    else if ((a == 3 || a == 11) && (b == 10 || b == 18))
    {
      this.tmp = this.apiData$.filter(e => e.atomicNumber >= a && e.atomicNumber <= b);
      this.tmp[12] = this.tmp[2];
      this.tmp[13] = this.tmp[3];
      this.tmp[14] = this.tmp[4];
      this.tmp[15] = this.tmp[5];
      this.tmp[16] = this.tmp[6];
      this.tmp[17] = this.tmp[7];
      this.tmp.fill(null, 2, 11);
      return this.tmp;
    }
    else
    {
      return this.apiData$.filter(e => e.atomicNumber >= a && e.atomicNumber <= b);
    }
  }

  getRowCounter(){
    console.log(this.rowCounter);
    return (this.rowCounter);
  }

  upRowCounter(){
    this.rowCounter++;
  }

  ngOnInit() {
    this.http.GetApiData().subscribe(data => {
      data.forEach(element => {
        
        if (Array.isArray(element.atomicMass))
        {
          this.atomicMassTmp = element.atomicMass[0];
        }
        else
        {
          this.atomicMassTmp = element.atomicMass;
        }
        console.log(element.groupBlock);
        switch(element.groupBlock)
        {
          case "noble gas":{
            this.apiData$.push(new NobleGasNonmetal
              (element.atomicNumber, this.atomicMassTmp, element.name, element.symbol, element.groupBlock));
              break;
          }
          case "nonmetal":{
            this.apiData$.push(new NonmetalNonmetal
              (element.atomicNumber, this.atomicMassTmp, element.name, element.symbol, element.groupBlock));
              break;
          }
          case "halogen":{
            this.apiData$.push(new HalogensNonmetal
              (element.atomicNumber, this.atomicMassTmp, element.name, element.symbol, element.groupBlock));
              break;
          }
          case "actinoid":{
            this.apiData$.push(new ActinidesMetal
              (element.atomicNumber, this.atomicMassTmp, element.name, element.symbol, element.groupBlock));
              break;
          }
          case "alkali metal":{
            this.apiData$.push(new AlkaliMetal
              (element.atomicNumber, this.atomicMassTmp, element.name, element.symbol, element.groupBlock));
              break;
          }
          case "alkaline earth metal":{
            this.apiData$.push(new AlkalineEarthMetal
              (element.atomicNumber, this.atomicMassTmp, element.name, element.symbol, element.groupBlock));
              break;
          }
          case "lanthanoid":{
            this.apiData$.push(new LanthanidesMetal
              (element.atomicNumber, this.atomicMassTmp, element.name, element.symbol, element.groupBlock));
              break;
          }
          case "metalloid":{
            this.apiData$.push(new MetalloidsMetal
              (element.atomicNumber, this.atomicMassTmp, element.name, element.symbol, element.groupBlock));
              break;
          }
          case "post-transition metal":{
            this.apiData$.push(new PostTransitionMetal
              (element.atomicNumber, this.atomicMassTmp, element.name, element.symbol, element.groupBlock));
              break;
          }
          case "metal":{
            this.apiData$.push(new PostTransitionMetal
              (element.atomicNumber, this.atomicMassTmp, element.name, element.symbol, element.groupBlock));
              break;
          }
          case "transition metal":{
            this.apiData$.push(new TransitionMetal
              (element.atomicNumber, this.atomicMassTmp, element.name, element.symbol, element.groupBlock));
              break;
          }
        }
      });
      this.done = true;
    });
  }

  
}
