/*
	UIZE JAVASCRIPT FRAMEWORK 2012-01-09

	http://www.uize.com/reference/Uize.Test.Uize.Date.Formatter.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Test.Uize.Date.Formatter',required:'Uize.Class',builder:function(){function _a(_b,_c,_d,_e,_f,_g,_h){var _i=new Date(+_b+(_b<100&&400),(+_c||1)-1,+_d||1,+_e||0,+_f||0,+_g||0,+_h||0);_b<100&&_i.setFullYear(_b);return _i;}var _j=_a(2001,9,11,8,46,40,95),_k=new Date(NaN),_l=_a(9,1,1),_m=_a(99,1,1),_n=_a(999,1,1),_o=_a(9999,1,1),_p=_a(2001,1,1),_q=_a(2001,12,1),_r=_a(2001,1,1),_s=_a(2001,1,31),_t=_a(2001,1,1),_u=_a(2001,2,1),_v=_a(2001,3,1),_w=_a(2001,4,1),_x=_a(2001,5,1),_y=_a(2001,6,1),_z=_a(2001,7,1),_A=_a(2001,8,1),_B=_a(2001,9,1),_C=_a(2001,10,1),_D=_a(2001,11,1),_E=_a(2001,12,1),_F=_a(2001,1,7),_G=_a(2001,1,8),_H=_a(2001,1,9),_I=_a(2001,1,10),_J=_a(2001,1,11),_K=_a(2001,1,12),_L=_a(2001,1,13),_M=_a(2001,1,1,0,0,0,0),_N=_a(2001,1,1,11,59,59,999),_O=_a(2001,1,1,12,0,0,0),_P=_a(2001,1,1,13,0,0,0),_Q=_a(2001,1,1,23,59,59,999);var _R=Uize.Class.subclass();_R.registerProperties({_S:'value'});return Uize.Test.declare({title:'Test for Uize.Date.Formatter Module',test:[
Uize.Test.requiredModulesTest('Uize.Date.Formatter'),Uize.Test.staticMethodsTest([['Uize.Date.Formatter.format',[['Test that the {YYYY} token is handled correctly for years with one digit',[_l,'{YYYY}'],'0009'],['Test that the {YYYY} token is handled correctly for years with two digits',[_m,'{YYYY}'],'0099'],['Test that the {YYYY} token is handled correctly for years with three digits',[_n,'{YYYY}'],'0999'],['Test that the {YYYY} token is handled correctly for years with four digits',[_o,'{YYYY}'],'9999'],['Test that the {YYYY} token is handled correctly for an invalid date',[_k,'{YYYY}'],'????'],['Test that the {YY} token is handled correctly for years with one digit',[_l,'{YY}'],'09'],['Test that the {YY} token is handled correctly for years with two digits',[_m,'{YY}'],'99'],['Test that the {YY} token is handled correctly for years with three digits',[_n,'{YY}'],'99'],['Test that the {YY} token is handled correctly for years with four digits',[_o,'{YY}'],'99'],
['Test that the {YY} token is handled correctly for an invalid date',[_k,'{YY}'],'??'],['Test that the {MM} token is handled correctly for months with one digit',[_p,'{MM}'],'01'],['Test that the {MM} token is handled correctly for months with two digits',[_q,'{MM}'],'12'],['Test that the {MM} token is handled correctly for an invalid date',[_k,'{MM}'],'??'],['Test that the {monthNo} token is handled correctly for months with one digit',[_p,'{monthNo}'],'1'],['Test that the {monthNo} token is handled correctly for months with two digits',[_q,'{monthNo}'],'12'],['Test that the {monthNo} token is handled correctly for an invalid date',[_k,'{monthNo}'],'?'],['Test that the {monthName} token is handled correctly for January',[_t,'{monthName}'],'January'],['Test that the {monthName} token is handled correctly for February',[_u,'{monthName}'],'February'],['Test that the {monthName} token is handled correctly for March',[_v,'{monthName}'],'March'],['Test that the {monthName} token is handled correctly for April',
[_w,'{monthName}'],'April'],['Test that the {monthName} token is handled correctly for May',[_x,'{monthName}'],'May'],['Test that the {monthName} token is handled correctly for June',[_y,'{monthName}'],'June'],['Test that the {monthName} token is handled correctly for July',[_z,'{monthName}'],'July'],['Test that the {monthName} token is handled correctly for August',[_A,'{monthName}'],'August'],['Test that the {monthName} token is handled correctly for September',[_B,'{monthName}'],'September'],['Test that the {monthName} token is handled correctly for October',[_C,'{monthName}'],'October'],['Test that the {monthName} token is handled correctly for November',[_D,'{monthName}'],'November'],['Test that the {monthName} token is handled correctly for December',[_E,'{monthName}'],'December'],['Test that the {monthName} token is handled correctly for an invalid date',[_k,'{monthName}'],'?????????'],['Test that the {shortMonthName} token is handled correctly for January',[_t,'{shortMonthName}'],'Jan'],
['Test that the {shortMonthName} token is handled correctly for February',[_u,'{shortMonthName}'],'Feb'],['Test that the {shortMonthName} token is handled correctly for March',[_v,'{shortMonthName}'],'Mar'],['Test that the {shortMonthName} token is handled correctly for April',[_w,'{shortMonthName}'],'Apr'],['Test that the {shortMonthName} token is handled correctly for May',[_x,'{shortMonthName}'],'May'],['Test that the {shortMonthName} token is handled correctly for June',[_y,'{shortMonthName}'],'Jun'],['Test that the {shortMonthName} token is handled correctly for July',[_z,'{shortMonthName}'],'Jul'],['Test that the {shortMonthName} token is handled correctly for August',[_A,'{shortMonthName}'],'Aug'],['Test that the {shortMonthName} token is handled correctly for September',[_B,'{shortMonthName}'],'Sep'],['Test that the {shortMonthName} token is handled correctly for October',[_C,'{shortMonthName}'],'Oct'],['Test that the {shortMonthName} token is handled correctly for November',[_D,'{shortMonthName}'],
'Nov'],['Test that the {shortMonthName} token is handled correctly for December',[_E,'{shortMonthName}'],'Dec'],['Test that the {shortMonthName} token is handled correctly for an invalid date',[_k,'{shortMonthName}'],'???'],['Test that the {DD} token is handled correctly for dates with one digit',[_r,'{DD}'],'01'],['Test that the {DD} token is handled correctly for dates with two digits',[_s,'{DD}'],'31'],['Test that the {DD} token is handled correctly for an invalid date',[_k,'{DD}'],'??'],['Test that the {dayNo} token is handled correctly for dates with one digit',[_r,'{dayNo}'],'1'],['Test that the {dayNo} token is handled correctly for dates with two digits',[_s,'{dayNo}'],'31'],['Test that the {dayNo} token is handled correctly for an invalid date',[_k,'{dayNo}'],'?'],['Test that the {dayNoSuffix} token is handled correctly for the 1st of the month',[_a(2001,1,1),'{dayNoSuffix}'],'st'],['Test that the {dayNoSuffix} token is handled correctly for the 2nd of the month',[_a(2001,1,2),'{dayNoSuffix}'],'nd'],
['Test that the {dayNoSuffix} token is handled correctly for the 3rd of the month',[_a(2001,1,3),'{dayNoSuffix}'],'rd'],['Test that the {dayNoSuffix} token is handled correctly for the 4th of the month',[_a(2001,1,4),'{dayNoSuffix}'],'th'],['Test that the {dayNoSuffix} token is handled correctly for the 10th of the month',[_a(2001,1,10),'{dayNoSuffix}'],'th'],['Test that the {dayNoSuffix} token is handled correctly for the 11th of the month',[_a(2001,1,11),'{dayNoSuffix}'],'th'],['Test that the {dayNoSuffix} token is handled correctly for the 12th of the month',[_a(2001,1,12),'{dayNoSuffix}'],'th'],['Test that the {dayNoSuffix} token is handled correctly for the 13th of the month',[_a(2001,1,13),'{dayNoSuffix}'],'th'],['Test that the {dayNoSuffix} token is handled correctly for the 14th of the month',[_a(2001,1,14),'{dayNoSuffix}'],'th'],['Test that the {dayNoSuffix} token is handled correctly for the 20th of the month',[_a(2001,1,20),'{dayNoSuffix}'],'th'],
['Test that the {dayNoSuffix} token is handled correctly for the 21st of the month',[_a(2001,1,21),'{dayNoSuffix}'],'st'],['Test that the {dayNoSuffix} token is handled correctly for the 22nd of the month',[_a(2001,1,22),'{dayNoSuffix}'],'nd'],['Test that the {dayNoSuffix} token is handled correctly for the 23rd of the month',[_a(2001,1,23),'{dayNoSuffix}'],'rd'],['Test that the {dayNoSuffix} token is handled correctly for the 24th of the month',[_a(2001,1,24),'{dayNoSuffix}'],'th'],['Test that the {dayNoSuffix} token is handled correctly for the 30th of the month',[_a(2001,1,30),'{dayNoSuffix}'],'th'],['Test that the {dayNoSuffix} token is handled correctly for the 31st of the month',[_a(2001,1,31),'{dayNoSuffix}'],'st'],['Test that the {dayNoSuffix} token is handled correctly for an invalid date',[_k,'{dayNoSuffix}'],'??'],['Test that the {dayName} token is handled correctly for Sunday',[_F,'{dayName}'],'Sunday'],['Test that the {dayName} token is handled correctly for Monday',[_G,'{dayName}'],'Monday'],
['Test that the {dayName} token is handled correctly for Tuesday',[_H,'{dayName}'],'Tuesday'],['Test that the {dayName} token is handled correctly for Wednesday',[_I,'{dayName}'],'Wednesday'],['Test that the {dayName} token is handled correctly for Thursday',[_J,'{dayName}'],'Thursday'],['Test that the {dayName} token is handled correctly for Friday',[_K,'{dayName}'],'Friday'],['Test that the {dayName} token is handled correctly for Saturday',[_L,'{dayName}'],'Saturday'],['Test that the {dayName} token is handled correctly for an invalid date',[_k,'{dayName}'],'????????'],['Test that the {shortDayName} token is handled correctly for Sunday',[_F,'{shortDayName}'],'Sun'],['Test that the {shortDayName} token is handled correctly for Monday',[_G,'{shortDayName}'],'Mon'],['Test that the {shortDayName} token is handled correctly for Tuesday',[_H,'{shortDayName}'],'Tue'],['Test that the {shortDayName} token is handled correctly for Wednesday',[_I,'{shortDayName}'],'Wed'],
['Test that the {shortDayName} token is handled correctly for Thursday',[_J,'{shortDayName}'],'Thu'],['Test that the {shortDayName} token is handled correctly for Friday',[_K,'{shortDayName}'],'Fri'],['Test that the {shortDayName} token is handled correctly for Saturday',[_L,'{shortDayName}'],'Sat'],['Test that the {shortDayName} token is handled correctly for an invalid date',[_k,'{shortDayName}'],'???'],['Test that the {hh} token is handled correctly when the time is midnight',[_M,'{hh}'],'00'],['Test that the {hh} token is handled correctly when the time is just before noon',[_N,'{hh}'],'11'],['Test that the {hh} token is handled correctly when the time is noon',[_O,'{hh}'],'12'],['Test that the {hh} token is handled correctly when the time is 1pm',[_P,'{hh}'],'13'],['Test that the {hh} token is handled correctly when the time is just before midnight',[_Q,'{hh}'],'23'],['Test that the {hh} token is handled correctly for an invalid date',[_k,'{hh}'],'??'],
['Test that the {h12} token is handled correctly when the time is midnight',[_M,'{h12}'],'12'],['Test that the {h12} token is handled correctly when the time is just before noon',[_N,'{h12}'],'11'],['Test that the {h12} token is handled correctly when the time is noon',[_O,'{h12}'],'12'],['Test that the {h12} token is handled correctly when the time is 1pm',[_P,'{h12}'],'1'],['Test that the {h12} token is handled correctly when the time is just before midnight',[_Q,'{h12}'],'11'],['Test that the {h12} token is handled correctly for an invalid date',[_k,'{h12}'],'?'],['Test that the {hh12} token is handled correctly when the time is midnight',[_M,'{hh12}'],'12'],['Test that the {hh12} token is handled correctly when the time is just before noon',[_N,'{hh12}'],'11'],['Test that the {hh12} token is handled correctly when the time is noon',[_O,'{hh12}'],'12'],['Test that the {hh12} token is handled correctly when the time is 1pm',[_P,'{hh12}'],'01'],
['Test that the {hh12} token is handled correctly when the time is just before midnight',[_Q,'{hh12}'],'11'],['Test that the {hh12} token is handled correctly for an invalid date',[_k,'{hh12}'],'??'],['Test that the {ampm} token is handled correctly when the time is midnight',[_M,'{ampm}'],'am'],['Test that the {ampm} token is handled correctly when the time is just before noon',[_N,'{ampm}'],'am'],['Test that the {ampm} token is handled correctly when the time is noon',[_O,'{ampm}'],'pm'],['Test that the {ampm} token is handled correctly when the time is 1pm',[_P,'{ampm}'],'pm'],['Test that the {ampm} token is handled correctly when the time is just before midnight',[_Q,'{ampm}'],'pm'],['Test that the {ampm} token is handled correctly for an invalid date',[_k,'{ampm}'],'??'],['Test that the {mm} token is handled correctly when the minutes is 0',[_M,'{mm}'],'00'],['Test that the {mm} token is handled correctly when the minutes is 59',[_N,'{mm}'],'59'],
['Test that the {mm} token is handled correctly for an invalid date',[_k,'{mm}'],'??'],['Test that the {minutes} token is handled correctly when the minutes is 0',[_M,'{minutes}'],'0'],['Test that the {minutes} token is handled correctly when the minutes is 59',[_N,'{minutes}'],'59'],['Test that the {minutes} token is handled correctly for an invalid date',[_k,'{minutes}'],'?'],['Test that the {ss} token is handled correctly when the seconds is 0',[_M,'{ss}'],'00'],['Test that the {ss} token is handled correctly when the seconds is 59',[_N,'{ss}'],'59'],['Test that the {ss} token is handled correctly for an invalid date',[_k,'{ss}'],'??'],['Test that the {seconds} token is handled correctly when the seconds is 0',[_M,'{seconds}'],'0'],['Test that the {seconds} token is handled correctly when the seconds is 59',[_N,'{seconds}'],'59'],['Test that the {seconds} token is handled correctly for an invalid date',[_k,'{seconds}'],'?'],['Test that the {zzz} token is handled correctly when the milliseconds is 0',
[_M,'{zzz}'],'000'],['Test that the {zzz} token is handled correctly when the milliseconds is 9',[_a(2001,1,1,11,59,59,9),'{zzz}'],'009'],['Test that the {zzz} token is handled correctly when the milliseconds is 99',[_a(2001,1,1,11,59,59,99),'{zzz}'],'099'],['Test that the {zzz} token is handled correctly when the milliseconds is 999',[_N,'{zzz}'],'999'],['Test that the {zzz} token is handled correctly for an invalid date',[_k,'{zzz}'],'???'],['Test that the {milliseconds} token is handled correctly when the milliseconds is 0',[_M,'{milliseconds}'],'0'],['Test that the {milliseconds} token is handled correctly when the milliseconds is 9',[_a(2001,1,1,11,59,59,9),'{milliseconds}'],'9'],['Test that the {milliseconds} token is handled correctly when the milliseconds is 99',[_a(2001,1,1,11,59,59,99),'{milliseconds}'],'99'],['Test that the {milliseconds} token is handled correctly when the milliseconds is 999',[_N,'{milliseconds}'],'999'],
['Test that the {milliseconds} token is handled correctly for an invalid date',[_k,'{milliseconds}'],'?'],['Test that date to format can be specified as a string',[_j+'','{YYYY}-{MM}-{DD}'],'2001-09-11'],['Test that date to format can be specified as a string in ISO8601 format',['2001-09-11','{YYYY}-{MM}-{DD}'],'2001-09-11'],['Test that date to format can be specified as a millisecond integers number',[+_j,'{YYYY}-{MM}-{DD}'],'2001-09-11'],['Test that the same token can be used more than once in the format string',[_j,'{YYYY}{YYYY}{YYYY}'],'200120012001'],['Test that characters surrounding tokens are preserved',[_j,'year: {YYYY}, YEAR: {YYYY}, Year --> {YYYY} <-- Year'],'year: 2001, YEAR: 2001, Year --> 2001 <-- Year'],['Test that all tokens can be used in the same format string',[_j,
'YY: {YY}, YYYY: {YYYY}, MM: {MM}, monthNo: {monthNo}, monthName: {monthName}, shortMonthName: {shortMonthName}, DD: {DD}, dayNo: {dayNo}, dayNoSuffix: {dayNoSuffix}, dayName: {dayName}, shortDayName: {shortDayName}, hh: {hh}, h12: {h12}, hh12: {hh12}, mm: {mm}, minutes: {minutes}, ss: {ss}, seconds: {seconds}, zzz: {zzz}, milliseconds: {milliseconds}, ampm: {ampm}'],'YY: 01, YYYY: 2001, MM: 09, monthNo: 9, monthName: September, shortMonthName: Sep, DD: 11, dayNo: 11, dayNoSuffix: th, dayName: Tuesday, shortDayName: Tue, hh: 08, h12: 8, hh12: 08, mm: 46, minutes: 46, ss: 40, seconds: 40, zzz: 095, milliseconds: 95, ampm: am'],['Test that the default format is {dayName}, {dayNo}{dayNoSuffix} {monthName} {YYYY}',_j,'Tuesday, 11th September 2001']]],['Uize.Date.Formatter.toPretty',[]],['Uize.Date.Formatter.parse',[['Test that a date specified as a Date object instance is handled correctly',[_j],_j],['Test that specifying the value null for the date to parse produces the value undefined',null,undefined],
['Test that specifying an empty string for the date to parse produces the value undefined','',undefined],['Test that a date specified as a number is handled correctly',[+_j],_j],['Test that the {YYYY} token is handled correctly when year is specified with four digits',['2001','{YYYY}'],_a(2001,1,1)],['Test that the {YYYY} token is handled correctly when year is less than 100 (ie. year is not placed in 20th century)',['0099','{YYYY}'],_a(99,1,1)],['Test that the {YYYY} token does not match numbers with less than four digits specified',['200','{YYYY}'],undefined],['Test that the {YY} token is handled correctly when year is specified with two digits',['99','{YY}'],_a(1999,1,1)],['Test that the {YY} token is handled correctly when year is less than 10',['09','{YY}'],_a(1909,1,1)],['Test that the {YY} token does not match numbers with less than two digits specified',['9','{YY}'],undefined],['Test that the {YY} token will match only the first two digits in a four digit year',['2001','{YY}'],_a(1920,1,1)],
['Test that the {MM} token is handled correctly when month is specified with two digits',['12','{MM}'],_a(0,12,1)],['Test that the {MM} token is handled correctly when month is less than 10',['09','{MM}'],_a(0,9,1)],['Test that the {MM} token does not match a two digit number that is greater than 12',['13','{MM}'],undefined],['Test that the {MM} token does not match a two digit number that is less than 1 (ie. 0)',['00','{MM}'],undefined],['Test that the {MM} token does not match numbers with less than two digits specified',['9','{MM}'],undefined],['Test that the {monthNo} token is handled correctly when month is specified with two digits',['12','{monthNo}'],_a(0,12,1)],['Test that the {monthNo} token is handled correctly when month is specified with one digit',['9','{monthNo}'],_a(0,9,1)],['Test that the {monthNo} token will not match a two digit number that is greater than 12, but will instead match only the first digit',['73','{monthNo}'],_a(0,7,1)],
['Test that the {monthNo} token does not match a one digit number that is less than 1 (ie. 0)',['0','{monthNo}'],undefined],['Test that the {monthName} token is handled correctly for January',['January','{monthName}'],_a(0,1,1)],['Test that the {monthName} token is handled correctly for February',['February','{monthName}'],_a(0,2,1)],['Test that the {monthName} token is handled correctly for March',['March','{monthName}'],_a(0,3,1)],['Test that the {monthName} token is handled correctly for April',['April','{monthName}'],_a(0,4,1)],['Test that the {monthName} token is handled correctly for May',['May','{monthName}'],_a(0,5,1)],['Test that the {monthName} token is handled correctly for June',['June','{monthName}'],_a(0,6,1)],['Test that the {monthName} token is handled correctly for July',['July','{monthName}'],_a(0,7,1)],['Test that the {monthName} token is handled correctly for August',['August','{monthName}'],_a(0,8,1)],['Test that the {monthName} token is handled correctly for September',
['September','{monthName}'],_a(0,9,1)],['Test that the {monthName} token is handled correctly for October',['October','{monthName}'],_a(0,10,1)],['Test that the {monthName} token is handled correctly for November',['November','{monthName}'],_a(0,11,1)],['Test that the {monthName} token is handled correctly for December',['December','{monthName}'],_a(0,12,1)],['Test that the {shortMonthName} token is handled correctly for January',['Jan','{shortMonthName}'],_a(0,1,1)],['Test that the {shortMonthName} token is handled correctly for February',['Feb','{shortMonthName}'],_a(0,2,1)],['Test that the {shortMonthName} token is handled correctly for March',['Mar','{shortMonthName}'],_a(0,3,1)],['Test that the {shortMonthName} token is handled correctly for April',['Apr','{shortMonthName}'],_a(0,4,1)],['Test that the {shortMonthName} token is handled correctly for May',['May','{shortMonthName}'],_a(0,5,1)],['Test that the {shortMonthName} token is handled correctly for June',['Jun','{shortMonthName}'],_a(0,6,1)],
['Test that the {shortMonthName} token is handled correctly for July',['Jul','{shortMonthName}'],_a(0,7,1)],['Test that the {shortMonthName} token is handled correctly for August',['Aug','{shortMonthName}'],_a(0,8,1)],['Test that the {shortMonthName} token is handled correctly for September',['Sep','{shortMonthName}'],_a(0,9,1)],['Test that the {shortMonthName} token is handled correctly for October',['Oct','{shortMonthName}'],_a(0,10,1)],['Test that the {shortMonthName} token is handled correctly for November',['Nov','{shortMonthName}'],_a(0,11,1)],['Test that the {shortMonthName} token is handled correctly for December',['Dec','{shortMonthName}'],_a(0,12,1)],['Test that the {DD} token is handled correctly when date is specified with two digits',['31','{DD}'],_a(0,1,31)],['Test that the {DD} token is handled correctly when date is less than 10',['09','{DD}'],_a(0,1,9)],['Test that the {DD} token does not match a two digit number that is greater than 31',['32','{DD}'],undefined],
['Test that the {DD} token does not match a two digit number that is less than 1 (ie. 0)',['00','{DD}'],undefined],['Test that the {DD} token does not match numbers with less than two digits specified',['9','{DD}'],undefined],['Test that the {dayNo} token is handled correctly when day number is specified with two digits',['10','{dayNo}'],_a(0,1,10)],['Test that the {dayNo} token is handled correctly when day number is specified with one digit',['9','{dayNo}'],_a(0,1,9)],['Test that the {dayNo} token will not match a two digit number that is greater than 31, but will instead match only the first digit',['32','{dayNo}'],_a(0,1,3)],['Test that the {dayNo} token does not match a one digit number that is less than 1 (ie. 0)',['0','{dayNo}'],undefined],['Test that the {dayNoSuffix} token is handled correctly for the "st" suffix',['st','{dayNoSuffix}'],_a(0,1,1)],['Test that the {dayNoSuffix} token is handled correctly for the "nd" suffix',['nd','{dayNoSuffix}'],_a(0,1,1)],
['Test that the {dayNoSuffix} token is handled correctly for the "rd" suffix',['rd','{dayNoSuffix}'],_a(0,1,1)],['Test that the {dayNoSuffix} token is handled correctly for the "th" suffix',['th','{dayNoSuffix}'],_a(0,1,1)],['Test that the {dayNoSuffix} token does not match a date string with no {dayNoSuffix} value specified',['XX','{dayNoSuffix}'],undefined],['Test that the {dayName} token is handled correctly for Sunday',['Sunday','{dayName}'],_a(0,1,1)],['Test that the {dayName} token is handled correctly for Monday',['Monday','{dayName}'],_a(0,1,1)],['Test that the {dayName} token is handled correctly for Tuesday',['Tuesday','{dayName}'],_a(0,1,1)],['Test that the {dayName} token is handled correctly for Wednesday',['Wednesday','{dayName}'],_a(0,1,1)],['Test that the {dayName} token is handled correctly for Thursday',['Thursday','{dayName}'],_a(0,1,1)],['Test that the {dayName} token is handled correctly for Friday',['Friday','{dayName}'],_a(0,1,1)],
['Test that the {dayName} token is handled correctly for Saturday',['Saturday','{dayName}'],_a(0,1,1)],['Test that the {dayName} token does not match a date string with no {dayName} value name',['XXXXXXX','{dayName}'],undefined],['Test that the {shortDayName} token is handled correctly for Sunday',['Sun','{shortDayName}'],_a(0,1,1)],['Test that the {shortDayName} token is handled correctly for Monday',['Mon','{shortDayName}'],_a(0,1,1)],['Test that the {shortDayName} token is handled correctly for Tuesday',['Tue','{shortDayName}'],_a(0,1,1)],['Test that the {shortDayName} token is handled correctly for Wednesday',['Wed','{shortDayName}'],_a(0,1,1)],['Test that the {shortDayName} token is handled correctly for Thursday',['Thu','{shortDayName}'],_a(0,1,1)],['Test that the {shortDayName} token is handled correctly for Friday',['Fri','{shortDayName}'],_a(0,1,1)],['Test that the {shortDayName} token is handled correctly for Saturday',['Sat','{shortDayName}'],_a(0,1,1)],
['Test that the {shortDayName} token does not match a date string with no {shortDayName} value specified',['XXX','{shortDayName}'],undefined],['Test that the {hh} token is handled correctly when hour is specified with two digits',['23','{hh}'],_a(0,1,1,23)],['Test that the {hh} token is handled correctly when hour is less than 10',['09','{hh}'],_a(0,1,1,9)],['Test that the {hh} token is handled correctly when the hour is 0',['00','{hh}'],_a(0,1,1)],['Test that the {hh} token does not match a two digit number that is greater than 23',['24','{hh}'],undefined],['Test that the {hh} token does not match numbers with less than two digits specified',['9','{hh}'],undefined],['Test that the {hh} token does not match a date string with no {hh} value specified',['XXX','{hh}'],undefined],['Test that the {h12} token is handled correctly when hour is specified with two digits',['12','{h12}'],_a(0,1,1)],['Test that the {h12} token is handled correctly when hour is less than 10',['9','{h12}'],_a(0,1,1,9)],
['Test that the {h12} token does not match a number that is less than 1 (ie. 0)',['0','{h12}'],undefined],['Test that the {h12} token does not match a number that is greater than 12, but will instead match only the first digit',['13','{h12}'],_a(0,1,1,1)],['Test that the {h12} token does not match a date string with no {h12} value specified',['XXX','{h12}'],undefined],['Test that the {hh12} token is handled correctly when hour is specified with two digits',['12','{hh12}'],_a(0,1,1)],['Test that the {hh12} token is handled correctly when hour is less than 10',['09','{hh12}'],_a(0,1,1,9)],['Test that the {hh12} token does not match a two digit number that is less than 1 (ie. 0)',['00','{hh12}'],undefined],['Test that the {hh12} token does not match a two digit number that is greater than 12',['13','{hh12}'],undefined],['Test that the {hh12} token does not match numbers with less than two digits specified',['9','{hh12}'],undefined],
['Test that the {hh12} token does not match a date string with no {hh12} value specified',['XXX','{hh12}'],undefined],['Test that the {ampm} token is handled correctly for am, when no hour is specified',['am','{ampm}'],_a(0,1,1)],['Test that the {ampm} token is handled correctly for pm, when no hour is specified',['pm','{ampm}'],_a(0,1,1,12)],['Test that the {ampm} token is handled correctly for the time 12am',['12am','{h12}{ampm}'],_a(0,1,1)],['Test that the {ampm} token is handled correctly for the time 1am',['1am','{h12}{ampm}'],_a(0,1,1,1)],['Test that the {ampm} token is handled correctly for the time 11am',['11am','{h12}{ampm}'],_a(0,1,1,11)],['Test that the {ampm} token is handled correctly for the time 12pm',['12pm','{h12}{ampm}'],_a(0,1,1,12)],['Test that the {ampm} token is handled correctly for the time 1pm',['1pm','{h12}{ampm}'],_a(0,1,1,13)],['Test that the {ampm} token is handled correctly for the time 11pm',['11pm','{h12}{ampm}'],_a(0,1,1,23)],
['Test that the {ampm} token does not match a date string with no {ampm} value specified',['XXX','{ampm}'],undefined],['Test that the {mm} token is handled correctly when minutes is specified with two digits',['59','{mm}'],_a(0,1,1,0,59)],['Test that the {mm} token is handled correctly when minutes is less than 10',['09','{mm}'],_a(0,1,1,0,9)],['Test that the {mm} token does not match a two digit number that is greater than 59',['60','{mm}'],undefined],['Test that the {mm} token is handled correctly when the minutes is 0',['00','{mm}'],_a(0,1,1)],['Test that the {mm} token does not match numbers with less than two digits specified',['9','{mm}'],undefined],['Test that the {mm} token does not match a date string with no {mm} value specified',['XXX','{mm}'],undefined],['Test that the {minutes} token is handled correctly when minutes is specified with two digits',['59','{minutes}'],_a(0,1,1,0,59)],['Test that the {minutes} token is handled correctly when minutes is specified with one digit',['9','{minutes}'],
_a(0,1,1,0,9)],['Test that the {minutes} token does not match a two digit number that is greater than 59, but will instead match only the first digit',['60','{minutes}'],_a(0,1,1,0,6)],['Test that the {minutes} token is handled correctly when the minutes is 0',['0','{minutes}'],_a(0,1,1)],['Test that the {minutes} token does not match a date string with no {minutes} value specified',['XXX','{minutes}'],undefined],['Test that the {ss} token is handled correctly when seconds is specified with two digits',['59','{ss}'],_a(0,1,1,0,0,59)],['Test that the {ss} token is handled correctly when seconds is less than 10',['09','{ss}'],_a(0,1,1,0,0,9)],['Test that the {ss} token does not match a two digit number that is greater than 59',['60','{ss}'],undefined],['Test that the {ss} token is handled correctly when the seconds is 0',['00','{ss}'],_a(0,1,1)],['Test that the {ss} token does not match numbers with less than two digits specified',['9','{ss}'],undefined],
['Test that the {ss} token does not match a date string with no {ss} value specified',['XXX','{ss}'],undefined],['Test that the {seconds} token is handled correctly when seconds is specified with two digits',['59','{seconds}'],_a(0,1,1,0,0,59)],['Test that the {seconds} token is handled correctly when seconds is specified with one digit',['9','{seconds}'],_a(0,1,1,0,0,9)],['Test that the {seconds} token does not match a two digit number that is greater than 59, but will instead match only the first digit',['60','{seconds}'],_a(0,1,1,0,0,6)],['Test that the {seconds} token is handled correctly when the seconds is 0',['0','{seconds}'],_a(0,1,1)],['Test that the {seconds} token does not match a date string with no {seconds} value specified',['XXX','{seconds}'],undefined],['Test that the {zzz} token is handled correctly when milliseconds is specified with three digits',['999','{zzz}'],_a(0,1,1,0,0,0,999)],['Test that the {zzz} token is handled correctly when milliseconds is less than 100',['099','{zzz}'],
_a(0,1,1,0,0,0,99)],['Test that the {zzz} token is handled correctly when milliseconds is less than 10',['009','{zzz}'],_a(0,1,1,0,0,0,9)],['Test that the {zzz} token is handled correctly when the milliseconds is 0',['000','{zzz}'],_a(0,1,1)],['Test that the {zzz} token does not match numbers with only two digits specified',['99','{zzz}'],undefined],['Test that the {zzz} token does not match numbers with only one digit specified',['9','{zzz}'],undefined],['Test that the {zzz} token does not match a date string with no {zzz} value specified',['XXX','{zzz}'],undefined],['Test that the {milliseconds} token is handled correctly when milliseconds is specified with three digits',['999','{milliseconds}'],_a(0,1,1,0,0,0,999)],['Test that the {milliseconds} token is handled correctly when milliseconds is specified with two digits',['99','{milliseconds}'],_a(0,1,1,0,0,0,99)],['Test that the {milliseconds} token is handled correctly when milliseconds is specified with one digit',['9','{milliseconds}'],_a(0,1,1,0,0,0,9)
],['Test that the {milliseconds} token is handled correctly when the milliseconds is 0',['0','{milliseconds}'],_a(0,1,1)],['Test that the {milliseconds} token does not match a date string with no {milliseconds} value specified',['XXX','{milliseconds}'],undefined],['Test that tokens may be interspersed within extraneous static text',['YYYY:2001,MM:09,DD:11','YYYY:{YYYY},MM:{MM},DD:{DD}'],_a(2001,9,11)],['Test that static text in a date format must exist in a date string in order for the date to be successfully parsed',['2001-09-11','DATE:{YYYY}-{MM}-{DD}'],undefined],['Test that text surrounding a date in a date string is ignored',['DATE --> 2001-09-11 <-- DATE','{YYYY}-{MM}-{DD}'],_a(2001,9,11)],['Test that a date string to parse may contain multiple dates, but only the date matching the specified format will govern the result',['2000-8-10,2001-09-11,2002/10/12','{YYYY}-{MM}-{DD}'],_a(2001,9,11)],
['Test that a date string may contain multiple dates of a specified format, but only the first date matching the format will be parsed',['2000-08-10,2001-09-11,2002-10-12','{YYYY}-{MM}-{DD}'],_a(2000,8,10)],['Test that extraneous text around tokens may contain regular expression special characters',['{[(2001|\\$^*+?.09|\\$^*+?.11)]}','{[({YYYY}|\\$^*+?.{MM}|\\$^*+?.{DD})]}'],_a(2001,9,11)],['Test that whitespace within extraneous static text is implicitly treated as flexible',['DATE:    2001-09-11','DATE: {YYYY}-{MM}-{DD}'],_a(2001,9,11)],['Test that whitespace within extraneous static text requires that some whitespace exist in the same place in the date string to parse',['DATE:2001-09-11','DATE: {YYYY}-{MM}-{DD}'],undefined],['Test that tokens imply optional arbitrary whitespace around them in a date string to parse',['2001 \t - \n 09    -    11','{YYYY}-{MM}-{DD}'],_a(2001,9,11)],['Test that a date string containing tokens for all components of a date is handled correctly',[
'YY: 01, YYYY: 2001, MM: 09, monthNo: 9, monthName: September, shortMonthName: Sep, DD: 11, dayNo: 11, dayNoSuffix: th, dayName: Tuesday, shortDayName: Tue, hh: 08, h12: 8, hh12: 08, mm: 46, minutes: 46, ss: 40, seconds: 40, zzz: 095, milliseconds: 95, ampm: am','YY: {YY}, YYYY: {YYYY}, MM: {MM}, monthNo: {monthNo}, monthName: {monthName}, shortMonthName: {shortMonthName}, DD: {DD}, dayNo: {dayNo}, dayNoSuffix: {dayNoSuffix}, dayName: {dayName}, shortDayName: {shortDayName}, hh: {hh}, h12: {h12}, hh12: {hh12}, mm: {mm}, minutes: {minutes}, ss: {ss}, seconds: {seconds}, zzz: {zzz}, milliseconds: {milliseconds}, ampm: {ampm}'],_j],['Test that the same token can be used more than once in the format string, and that the last instance of the token wins',['2001,2002,2003','{YYYY},{YYYY},{YYYY}'],_a(2003)],['Test that date parsing is case insensitive, for both month names and day names, as well as extraneous static text around tokens',
['date: tUeSdAy 11TH sEpTeMbEr 2001','DATE: {dayName} {dayNo}{dayNoSuffix} {monthName} {YYYY}'],_a(2001,9,11)],['Test that a date specified as a Date object instance is handled correctly',[new _R({value:_j})],_j],['Test that specifying the value null for the date to parse produces the value undefined',[new _R({value:null})],undefined],['Test that specifying an empty string for the date to parse produces the value undefined',[new _R({value:''})],undefined],['Test that a date specified as a number is handled correctly',[new _R({value:+_j})],_j],['Test that a date specified as a number is handled correctly',[new _R({value:'2001-09-11'}),'{YYYY}-{MM}-{DD}'],_a(2001,9,11)],['Test that when no format is specified, an ISO 8601 formatted date is parsed correctly',['2001-09-11'],_a(2001,9,11)],['Test that when no format is specified, a serialized Date object is parsed correctly',[_a(2001,9,11,8,46,40)+''],_a(2001,9,11,8,46,40)]]]])]});}});