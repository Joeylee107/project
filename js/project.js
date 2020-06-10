const PROGRAMS = [
	{
    id: "program-1",
		program_title: "Volunteer exchange program",
		program_subtitle: "If you are between 18 to 25",
    program_description: "Work, study and travel with our Volunteer exchange program.",
		more: "more"
	},
	{
    id: "program-2",
		program_title: "Gap year exchange program",
		program_subtitle: "If you are in your gap year",
    program_description: "Spend your gap year with our Gap year exchange program",
		more: "more"
	},
	{
    id: "program-3",
		program_title: "University student exchange program",
		program_subtitle: "If you are an university student",
    program_description: "Study in different country with our University student exchange program",
		more: "more"
	},
	{
    id: "program-4",
		program_title: "Entrepreneur exchange programe",
		program_subtitle: "If you just finished your degree",
    program_description: "Gain work experience with our Entrepreneur exchange program",
		more: "more"
	},
	{
    id: "program-5",
		program_title: "Company team exchange program",
		program_subtitle: "If you are in a crew",
    program_description: "Bring your team with you with our Company team exchange program",
		more: "more"
	},
 ];




$(document).ready(function(){
	const HTML_PREFIX = "html";
	const DESCRIPTION_PREFIX = "description";

	$.each(PROGRAMS,function(index, val) {
		let programHTML = $("<article>")
			.attr("id", HTML_PREFIX + index);

	 	let title = $("<h2>" + val.program_title + "</h2>");
	 	programHTML.append(title);

	 	let subtitle = $("<h3>" + val.program_subtitle + "</h3>");
	 	programHTML.append(subtitle);

		let more = $("<p>" + val.more + "</p>");
		programHTML.append(more);

	 	let description = $("<p>")
			.text(val.program_description)
			.attr("id", DESCRIPTION_PREFIX + "_" + HTML_PREFIX + index)
	    .addClass("hidden")

	 	programHTML.append(description);

		$('#programList').append(programHTML);

		programHTML.on("click", displayPrograms);

	});

	function displayPrograms() {
		let programHTML = $(this);
	  let detailsHTMLID = DESCRIPTION_PREFIX + "_" + programHTML.attr('id');

	  $('#' + detailsHTMLID).toggle(200);
	}
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
