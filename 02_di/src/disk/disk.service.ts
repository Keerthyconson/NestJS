import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData() {
    console.log("Get Data - drawing 20watts from power service ");
    this.powerService.supplyPower(20);
    return "data from disk!";
  }
}
