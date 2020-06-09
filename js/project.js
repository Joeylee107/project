const PROGRAMS = [
	{
    id: "program-1",
		program_title: "Volunteer exchange program",
		program_subtitle: "If you are between 18 to 25",
    program_description: "Work, study and travel with our Volunteer exchange program.",
	},
	{
    id: "program-2",
		program_title: "Gap year exchange program",
		program_subtitle: "If you are in your gap year",
    program_description: "Spend your gap year with our Gap year exchange program",

	},
	{
    id: "program-3",
		program_title: "University student exchange program",
		program_subtitle: "If you are an university student",
    program_description: "Study in different country with our University student exchange program",

	},
	{
    id: "program-4",
		program_title: "Entrepreneur exchange programe",
		program_subtitle: "If you just finished your degree",
    program_description: "Gain work experience with our Entrepreneur exchange program",

	},
	{
    id: "program-5",
		program_title: "Company team exchange program",
		program_subtitle: "If you are in a crew",
    program_description: "Bring your team with you with our Company team exchange program",

	},
 ];

 function createProgramHTML(program) {

 	let programHTML = $("<article>");

 	let title = $("<h2>" + program.program_title + "</h2>");
 	programHTML.append(title);

 	let subtitle = $("<h3>" + program.program_subtitle + "</h3>");
 	programHTML.append(subtitle);

 	let description = $("<p>" + program.program_description + "</p>");
 	programHTML.append(description);

 	return programHTML;
 }

 function displayPrograms(programs) {
 	let programsList = $("#programList");

 	programsList.empty();
 	for(let program of programs) {
 		let programHTML = createProgramHTML(program);
 		programsList.append(programHTML);
 	}
 }

 $(document).ready(function(){
 	displayPrograms(PROGRAMS);
 });



function search() {
 	let query = $("#searchText").val();

 	query = query.toLowerCase().trim();
  let matches = [];

  for(let program of PROGRAMS) {
 				let programTitle = program.program_title.toLowerCase();
 				if(programTitle.includes(query)) {
 					matches.push(program);
 				}
 			}
 	displayPrograms(matches);
 }
