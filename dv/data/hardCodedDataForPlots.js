//declare data for 3 possible demo patients

var infoBarIntro = "CHLA PICU DASHBOARD | CURRENT PATIENT DATA | ";

var pbdata = [
	{"EID" : 4162, "Sex" : "f", "Race" : 3, "Age" : 185, "Weight" : 100},
	{"EID" : 10215, "Sex" : "f", "Race" : 7, "Age" : 94, "Weight" : 18},
	{"EID" : 10091, "Sex" : "f", "Race" : 7, "Age" : 94, "Weight" : 18}
];

var pbstrings = [
	"ID: 4162		SEX: F			RACE: 3			AGE: 185 MONTHS			WEIGHT: 100 LBS",
	"ID: 10215		SEX: F			RACE: 7			AGE:  94 MONTHS			WEIGHT:  18 LBS",
	"ID: 10091		SEX: F			RACE: 7			AGE:  94 MONTHS			WEIGHT:  18 LBS"
];

//---------------------------Gender Circles---------------------------//

		//define the diameter of the circle
		var gCw = 50,
		    gCh = 50;
		
//---------------------------Medication Bar---------------------------//

		var medNames = ["Cefotaxime", "Dopamine", "Epinephrine", "Milrinone", "Piperacillin", "Vancomyin"];
		
//---------------------------Race Circle---------------------------//


		var raceNames = ["U", "W", "B", "L", "C", "J", "PI", "O", "K"];