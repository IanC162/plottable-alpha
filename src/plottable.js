/*
 * Main source for Plottable Alpha
 */
			
			//Convert point to coordinate form
			function coord(i) {
				
				return (i/20)-13;
				
			}
			
			//reset
			function clearBoard() {
				
				var canvas = document.getElementById("master");
				var context = canvas.getContext("2d");
				
				context.fillStyle = "black";
				context.fillRect(0,0,520,520);
				
				var opts = {
				distance : 20,
			    lineWidth : 1.5,
			    gridColor : "green",
			    caption : false
				};
				
				new Grid(opts).draw(context);
				
				context.fillStyle = "white";
				
				context.fillRect(0,260,520,1.5);
				context.fillRect(260,0,1.5,520);
				
			}
			
			//Graphs a function in the context of math.js
			function submit() {
				
				var context = document.getElementById("master").getContext("2d");
				
				expr = Parser.parse(document.getElementById("func").value);
				
				context.fillStyle = "red";

				var i=0;
				
				while (i<=520) {
					
					context.fillRect(i,520-((expr.evaluate({x : coord(i)})+13)*20),1.5,1.5);
					i += 0.01;
					
				}
			}