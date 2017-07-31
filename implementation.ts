import {Department} from "./department";
import {QualityDepartment} from "./quality-department";
import {AccountingDepartment} from "./accounting-department";

let qd: QualityDepartment = new QualityDepartment("QualityDepartment");
qd.printName();
qd.printMeeting();
qd.checkQuality();

let ad: AccountingDepartment = new AccountingDepartment("QualityDepartment");
ad.printName();
ad.printMeeting();
ad.checkAccounts();

