function search(){

var key = "7PcXD9iQU905xvCopWU8Nqkiy8GoiEnwpCQkcl5O"
var searchTerm = document.getElementById("fdaSearch").value

$.ajax({
   url: "https://api.fda.gov/drug/event.json?api_key="+ key + "&search=" + searchTerm+"&count=patient.reaction.reactionmeddrapt.exact",
   dataType: "text",
   success: function(data) {
    $("body").prepend(data)
    console.log(data.results.terms)
   },
   type: 'GET'

});

}