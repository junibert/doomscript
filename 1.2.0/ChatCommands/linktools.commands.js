		RaidCommand.create( 
			{
				commandName: "linktools",
				aliases: ["advertise", "blatantselfpromotion", "getdoomscript"],
				// No parsing needed
				/*parsingClass: ,*/
				handler: function(deck, parser, params, text, context)
				{
					// Declare ret object
					var ret = {success: true};

					
					if (params.trim() === "post") {
						var toolsText = "\nGet doomscript: " + DC_LoaTS_Properties.scriptURL + " and any of: ";
						toolsText += "\nRaidTools: " + DC_LoaTS_Properties.RaidToolsURL + " ";
						toolsText += "\nQuickFriend: " + DC_LoaTS_Properties.QuickFriendURL + " ";
						toolsText += "\nPlay Now Fix: " + DC_LoaTS_Properties.PlayNowFixURL;

						holodeck._chat_window._active_room.sendRoomMessage(toolsText);
					}
					else {
						var toolsText = "\ndoomscript: <a href=\"" + DC_LoaTS_Properties.scriptURL + "\" target=\"_blank\">" + DC_LoaTS_Properties.scriptURL + "</a> \n";
						toolsText += "RaidTools: <a href=\"" + DC_LoaTS_Properties.RaidToolsURL + "\" target=\"_blank\">" + DC_LoaTS_Properties.RaidToolsURL + "</a> \n";
						toolsText += "QuickFriend: <a href=\"" + DC_LoaTS_Properties.QuickFriendURL + "\" target=\"_blank\">" + DC_LoaTS_Properties.QuickFriendURL + "</a> \n";
						toolsText += "Play Now Fix: <a href=\"" + DC_LoaTS_Properties.PlayNowFixURL + "\" target=\"_blank\">" + DC_LoaTS_Properties.PlayNowFixURL + "</a> \n";

						deck.activeDialogue().raidBotMessage(toolsText);
					}
					
					return ret;
				},
				getOptions: function()
				{
					var commandOptions = {					
						initialText: {
							text: "Display tools links"
						}
					};
					
					return commandOptions;
				},
				buildHelpText: function()
				{
					var helpText = "<b>Raid Command:</b> <code>/linktools [post]</code>\n";
					helpText += "Displays a list of scripts that you might find useful.\n";
					helpText += "<code>" + this.getCommandLink("") + "</code> will post the links just to you.\n";
					helpText += "<code>" + this.getCommandLink("post") + "</code> will post the links to chat.";
					
					return helpText;
				}
			}
		);
		
