    /************************************/
    /****** RaidMonitorTools Class ******/
    /************************************/

    window.RaidMonitorTools = Class.create({

        sizes: ["Small", "Medium", "Large", "Epic", "Colossal"],
        blocks: {},


        initialize: function()
        {
            var mg = $("maingame"),
                sizes = this.sizes,
                i;

            // Create the overall block
            var rmBlock = document.createElement("div");
            rmBlock.className = "RaidMonitor-Block";

            rmBlock.style.top = mg.offsetTop + mg.offsetHeight - 350 + "px";
            rmBlock.style.left = mg.offsetLeft + mg.offsetWidth + "px";

            for (i = 0; i < sizes.length; i++) {
                rmBlock.appendChild(this._createBlock(sizes[i]));
            }

            rmBlock.appendChild(this._createSettingsBlock());
            rmBlock.appendChild(this._createHelpBlock());

            document.body.appendChild(rmBlock);
            this.rmBlock = rmBlock;
        },

        _createBlock: function(size) {
            var sizeBlock, sizeBlockInner, contents, icon;
            sizeBlock = document.createElement("div");
            sizeBlock.className = "RaidMonitor-SizeBlock RaidMonitor-SizeBlock-" + size;

            sizeBlockInner = document.createElement("div");
            sizeBlockInner.className = "RaidMonitor-SizeBlockInner";
            sizeBlock.appendChild(sizeBlockInner);

            contents = document.createElement("div");
            contents.className = "RaidMonitor-SizeBlockContents";
            sizeBlockInner.appendChild(contents);

            icon = document.createElement("div");
            icon.className = "RaidMonitor-SizeBlockIcon";
            sizeBlockInner.appendChild(icon);

            this.blocks[size] = contents;

            return sizeBlock;
        },

        _createSettingsBlock: function() {
            var block = this._createBlock("Settings"),
                contents = this.blocks["Settings"];

            var linkWrapper = document.createElement("p");
            linkWrapper.className = "RaidMonitor-SettingsLinkWrapper";
            contents.appendChild(linkWrapper);

            var linkLabel = document.createElement("label");
            linkLabel.className = "RaidMonitor-SettingsLinkLabel";
            linkLabel.appendChild(document.createTextNode("Link: "));
            linkWrapper.appendChild(linkLabel);

            var linkInput = document.createElement("input");
            linkInput.type = "text";
            linkInput.className = "RaidMonitor-SettingsLinkInput";
            linkLabel.appendChild(linkInput);

            var privacyWrapper = document.createElement("p");
            privacyWrapper.className = "RaidMonitor-SettingsPrivacyWrapper";
            contents.appendChild(privacyWrapper);

            var privacyLabel = document.createElement("label");
            privacyLabel.className = "RaidMonitor-SettingsPrivacyLabel";
            privacyLabel.appendChild(document.createTextNode("Post To: "));
            privacyWrapper.appendChild(privacyLabel);

            var privacyInput = document.createElement("select");
            privacyInput.className = "RaidMonitor-SettingsPrivacySelect RaidMonitorPrivacySelect";
            privacyLabel.appendChild(privacyInput);


            var lists = DC_LoaTS_Helper.getRaidMonitorLists();

            for (var i = 0; i < lists.length; i++) {
                var list = lists[i];
                if (list.pass) {
                    var listOption = document.createElement("option");
                    listOption.value = list.pass;
                    listOption.appendChild(document.createTextNode(list.name));
                    privacyInput.appendChild(listOption);
                }
            }

            return block;
        },

        _createHelpBlock: function() {
            var block = this._createBlock("Help");


            return block;
        },

        show: function() {
            this.rmBlock.show();
        }
    });

    RaidMonitorTools.show = function() {
        if (!window.raidMonitorTools) {
            window.raidMonitorTools = new RaidMonitorTools();
            DC_LoaTS_Helper.registerEventHandler(window, "resize", RaidMonitorTools.adjustLocation)
        }
        RaidMonitorTools.adjustLocation();
        raidMonitorTools.show();
    };

    RaidMonitorTools.adjustLocation = function() {
        if (raidMonitorTools) {
            var mg = $("maingame"),
                pos = RaidMonitorTools.getPosition();

            if (pos === "right") {
                raidMonitorTools.rmBlock.style.top = DC_LoaTS_Helper.getRealOffsetTop(mg) + mg.offsetHeight/2 - 200 + "px";
                raidMonitorTools.rmBlock.style.left = mg.offsetLeft + mg.offsetWidth + "px";
                raidMonitorTools.rmBlock.className = raidMonitorTools.rmBlock.className.replace("bottom", "").trim();
                raidMonitorTools.rmBlock.className = raidMonitorTools.rmBlock.className.replace("toolbar", "").trim();
                raidMonitorTools.rmBlock.style.display = "block";
                raidMonitorTools.rmBlock.parentNode.removeChild(raidMonitorTools.rmBlock);
                document.body.appendChild(raidMonitorTools.rmBlock);
            }
            else if (pos === "bottom") {
                raidMonitorTools.rmBlock.style.top = DC_LoaTS_Helper.getRealOffsetTop(mg) + mg.offsetHeight + "px";
                raidMonitorTools.rmBlock.style.left = mg.offsetLeft + mg.offsetWidth/2 - 200 + "px";
                raidMonitorTools.rmBlock.className = raidMonitorTools.rmBlock.className.replace("toolbar", "").trim();
                if (raidMonitorTools.rmBlock.className.indexOf("bottom") < 0) {
                    raidMonitorTools.rmBlock.className += " bottom";
                }
                raidMonitorTools.rmBlock.style.display = "block";
                raidMonitorTools.rmBlock.parentNode.removeChild(raidMonitorTools.rmBlock);
                document.body.appendChild(raidMonitorTools.rmBlock);
            }
            else if (pos === "toolbar") {
                raidMonitorTools.rmBlock.style.top = "0px";
                raidMonitorTools.rmBlock.style.left = "0px";
                raidMonitorTools.rmBlock.className = raidMonitorTools.rmBlock.className.replace("bottom", "").trim();
                if (raidMonitorTools.rmBlock.className.indexOf("toolbar") < 0) {
                    raidMonitorTools.rmBlock.className += " toolbar";
                }
                RaidToolbar.show();
                raidMonitorTools.rmBlock.parentNode.removeChild(raidMonitorTools.rmBlock);
                window.raidToolbar.rmContainer.appendChild(raidMonitorTools.rmBlock);
            }
            else if (pos === "hidden") {
                raidMonitorTools.rmBlock.style.display = "none";
            }
            else {
                console.log("Did not understand setting position to: " + pos);
            }
        }
    };

    RaidMonitorTools.getPosition = function() {
        return DC_LoaTS_Helper.getPref("RaidMonitorToolsLocation", "right");
    };

    RaidMonitorTools.setLocation = function(location) {
        DC_LoaTS_Helper.setPref("RaidMonitorToolsLocation", location);
        RaidMonitorTools.adjustLocation();
    };

    RaidMonitorTools.refresh = function() {
        var i, size, cooldown, block, blockp, anyBehind = false;
        for (i = 0; i < raidMonitorTools.sizes.length; i++) {
            size = raidMonitorTools.sizes[i];
            cooldown = RaidMonitorAPI.cooldowns[size];
            block = raidMonitorTools.blocks[size];
            blockp = block.parentNode;

            // Empty out the contents block for regeneration
            $(block).update();
            console.log("Refreshing cooldown: ", size, cooldown, block);
            // If there's a cooldown object
            if (cooldown) {
                var parts = cooldown.lastUpdateTime.split(" ");
                var sdd = parts[0].split("-");
                var sdt = parts[1].split(":");

                cooldown.lastUpdate = new Date(sdd[0], sdd[1]-1, sdd[2], sdt[0], sdt[1], sdt[2]);
                cooldown.endDate = new Date(cooldown.lastUpdate.getTime() + (cooldown.cooldown + RaidMonitorAPI.wiggleRoom)*60*60*1000);

                var cdPreface = "";

                if (cooldown.dead === 'Yes') {
                    console.log("Cooldown: ", cooldown, "Behind? ", (cooldown.endDate < new Date())?"Yes":"No");
                    if (cooldown.endDate < new Date()) {
                        if (blockp.className.indexOf("behind") < 0) {
                            blockp.className += " behind";
                        }
                        cdPreface = "Access Expired ";
                        anyBehind = true;
                        if (holodeck && typeof holodeck.activeDialogue === "function" && holodeck.activeDialogue() && DC_LoaTS_Helper.getPref("CooldownReminderWhispers", true)) {
                            holodeck.activeDialogue().raidBotMessage(size + " cooldown expired " + moment(cooldown.endDate).fromNow());
                        }
                    }
                    else {
                        if (blockp.className.indexOf("behind") >= 0) {
                            blockp.className = blockp.className.replace("behind", "").trim();
                        }
                        cdPreface = "Access Expires ";
                    }
                }
                // Not dead and cooldown obj does exist
                else {
                    if (blockp.className.indexOf("behind") >= 0) {
                        blockp.className = blockp.className.replace("behind", "").trim();
                    }
                    cdPreface = "Access Expires ";
                }

                var cd = document.createElement("p");
                cd.appendChild(document.createTextNode(cdPreface + moment(cooldown.endDate).fromNow()));
                block.appendChild(cd);

                var lastSummon = document.createElement("p");
                lastSummon.appendChild(document.createTextNode("Last Summoned: " + DC_LoaTS_Helper.raids[cooldown.boss].shortName));
                block.appendChild(lastSummon);
            }
            // No raids ever summoned in this category
            else {
                if (blockp.className.indexOf("behind") < 0) {
                    blockp.className += " behind";
                }
                var lastSummon = document.createElement("p");
                lastSummon.appendChild(document.createTextNode("You haven't posted any raids!"));
                block.appendChild(lastSummon);
                if (holodeck && typeof holodeck.activeDialogue === "function" && holodeck.activeDialogue() && DC_LoaTS_Helper.getPref("CooldownReminderWhispers", true)) {
                    holodeck.activeDialogue().raidBotMessage(size + " raid has never been posted.");
                }

            }
        }

        if (!anyBehind) {
            // This would probably get annoying
            //holodeck.activeDialogue().raidBotMessage("All raids properly summoned.");
        }
    };