
// List of all raid ids and names. Any raid without a real raid id will not show up nicely.
DC_LoaTS_Helper.raids =
{
    // Personal Raids
    sherlock_holmes:    new RaidType("sherlock_holmes",    "Z10", "The Murderer", "Murderer", "Murderer",             12,   1, "S",    [6000000, "N/A", "N/A", "N/A"]),
    wrath_of_player:    new RaidType("wrath_of_player",     "ZA", "Your Wrath", "Your Wrath", "Wrath",                12,   1, "S",   [10000000, "N/A", "N/A", "N/A"]),
    lu_bu:              new RaidType("lu_bu",              "ZA2", "LU BU", "LU BU", "Lubu",                           12,   1, "S",   [10000000, "N/A", "N/A", "N/A"]),
    ragnar:             new RaidType("ragnar",             "ZA3", "Ragnar", "Ragnar", "Ragnar",                        1,   1, "S",   [10000000, "N/A", "N/A", "N/A"]),
    centurian_covert_agent:new RaidType("centurian_covert_agent","ZA3", "Centurian Covert Agent", "CC Agent", "Agent", 1,   1, "S",   [10000000, "N/A", "N/A", "N/A"]),
    talia:              new RaidType("talia",              "ZA4", "Talia", "Talia", "Talia",                           1,   1, "S",   [10000000, "N/A", "N/A", "N/A"]),
    myrmexidaks:        new RaidType("myrmexidaks",        "ZA4", "Myrmexidaks", "Myrmexidaks", "Myrm",                1,   1, "S",   [10000000, "N/A", "N/A", "N/A"]),

    // Public raids
    // Small Raids
    commander:          new RaidType("commander",           "Z1", "Centurian Commander", "CC Commander", "CC Comm",  168,  10, "S",     150000),
    ragebeasts:         new RaidType("ragebeasts",          "Z2", "Garlax Ragebeasts", "Ragebeasts", "Rage",         120,  10, "S",    2000000),
    cybertollahs:       new RaidType("cybertollahs",        "Z3", "Supreme Cybertollahs", "Cybertollahs", "Cyber-T",  72,  10, "S",    4000000),
    seth:               new RaidType("seth",                "Z4", "Nathaniel Vorden", "Vorden", "Vorden",             72,  10, "S",    6000000),
    scarlet_harlet:     new RaidType("scarlet_harlet",      "Z6", "The Scarlet Harlot", "Scarlet", "Harlot",          72,  10, "S",   [15300000, 22950000, 30600000, 45900000],/*FS calculated normally*/null,[4590000, 4590000, 4590000, 4590000]),
    lupin:              new RaidType("lupin",               "Z7", "Lupin", "Lupin", "Lupin",                          72,  10, "S",   [25500000, 38250000, 51000000, 76500000],/*FS calculated normally*/null,[7650000, 7650000, 7650000, 7650000]),
    lieutenant_targe:   new RaidType("lieutenant_targe",    "Z8", "Lieutenant Targe", "Targe", "Targe",              120,  10, "S",   14000000),
    sigurd:             new RaidType("sigurd",              "Z9", "Sigurd Spinebreaker", "Sigurd", "Sigurd",          72,  10, "S",   16000000),
    space_pox:          new RaidType("space_pox",           "P1", "Space Pox", "Pox", "Pox",                           5,  12, "S", [100000000, 500000000, 1000000000, 1500000000],/*FS calculated normally*/null,[35000000, 175000000, 350000000, 525000000]),
    quiskerian_temple:  new RaidType("quiskerian_temple",   "L1", "Quiskerian Temple", "Temple", "Temple",            10,  25, "S", [200000000, 1000000000, 2000000000, 3000000000]),
    missile_strike:     new RaidType("missile_strike",      "ZA", "Missile Strike", "Missiles", "Missile",            72,  10, "S",  [22000000, 28600000, 35200000, 44000000]),
    pi:                 new RaidType("pi",                 "ZA2", "Pi", "Pi", "Pi",                                   72,  10, "S",  [24000000, 31200000, 38400000, 48000000]),
    master_hao:         new RaidType("master_hao",         "Z19", "Master Hao", "Hao", "Hao",                         36,  10, "S",[1000000000, 1300000000, 1600000000, 2000000000]),
    trulcharn:          new RaidType("trulcharn",           "F1", "Trulcharn", "Trulcharn", "Trulcharn",               3,  10, "S",[10100000000, 10100000000, 10100000000, 10100000000],/*FS calculated normally*/null,[1000000000, 1000000000, 1000000000, 1000000000]),

    // Small+ Raids
    purple_lion:        new RaidType("purple_lion",         "Z5", "Purple Lion", "Lion", "Lion",                      72,  20, "S",   [15500000,23250000,31000000,46500000], null, [2325000,2325000,2325000,2325000]),

    // Medium Raids
    "void":             new RaidType("void",                "Z1", "Centurian Void Killer", "Void Killer", "VK",      168,  50, "S",    5000000),
    carnus:             new RaidType("carnus",              "Z2", "Carnus 9000", "Carnus", "Carnus",                 120,  50, "S",   15000000),
    cruiser:            new RaidType("cruiser",             "Z3", "Centurian Cruiser", "CC Cruiser", "Cruiser",       72,  50, "S",   25000000),
    china:              new RaidType("china",               "Z4", "Blood Alley Gang", "Gang", "Gang",                 72,  50, "S",   35000000),
    caligula:           new RaidType("caligula",            "Z6", "Caligula", "Caligula", "Cali",                     72,  50, "S",   [92250000, 138375000, 184500000, 276750000],/*FS calculated normally*/null,[7380000, 7380000, 7380000, 7380000]),
    warden_ramiro:      new RaidType("warden_ramiro",       "Z7", "Warden Ramiro", "Ramiro", "Ramiro",                72,  50, "S",   [153750000, 230625000, 307500000, 461250000],/*FS calculated normally*/null,[12300000, 12300000, 12300000, 12300000]),
    vulture_gunship:    new RaidType("vulture_gunship",     "Z8", "Vulture Gunship", "Vulture", "Vulture",            72,  50, "S",   65000000),
    xarpa:              new RaidType("xarpa",               "Z9", "Centurian Fleet Commander", "Fleet Com.", "Fleet Comm",72,50,"S",  70000000),
    bachanghenfil:      new RaidType("bachanghenfil",      "Z10", "Bachanghenfil", "Bachanghenfil", "Bach",           72,  50, "S",  [75000000, 97500000, 120000000, 150000000]),
    gut_phager:         new RaidType("gut_phager",         "Z11", "Gut-Phager", "Gut-Phager", "Phager",               72,  50, "S",  [80000000, 104000000, 128000000, 160000000]),
    bashan:             new RaidType("bashan",              "ZA", "Bashan", "Bashan", "Bashan",                       72,  50, "S",   85000000),
    cyborg_shark:       new RaidType("cyborg_shark",        "ZA2", "Cyborg Shark", "C. Shark", "Shark",               72,  50, "S",   90000000),
    hulking_mutant:     new RaidType("hulking_mutant",      "Z15", "Hulking Mutant", "Mutant", "Mutant",              72,  50, "S",   90000000),
    screaming_barracuda:new RaidType("screaming_barracuda", "Z16", "Screaming Barracuda", "Barracuda", "Barracuda",   72,  50, "S",  110000000),
    vunlac:             new RaidType("vunlac",              "Z19", "Vunlac", "Vunlac", "Vunlac",                      36,  50, "S", [1500000000, 1950000000, 2400000000, 3000000000]),
    silj:               new RaidType("silj",                "ZA3", "Silj the Wurm-Rider", "Silj", "Silj",             30,  50, "S",  750000000),
    tyraness_guard:     new RaidType("tyraness_guard",      "ZA4", "Tyraness' Guard", "Tyr. Guard", "Guard",          30,  50, "S",  750000000),
    sian_dragonfly_1:   new RaidType("sian_dragonfly_1",    "Z21", "Sian Dragonfly", "Dragonfly", "Dfly",             48,  50, "S",  [10000000000,15000000000,20000000000,30000000000], null, [200000000,400000000,400000000,600000000]),
    lady_victoria_ashdown_1:new RaidType("lady_victoria_ashdown_1","Z21","Lady Victoria Ashdown", "Ashdown", "Ash",   48,  50, "S",  [10000000000,15000000000,20000000000,30000000000], null, [200000000,400000000,400000000,600000000]),
    krakak_plague:      new RaidType("krakak_plague",       "C1-1", "Krakak Plague", "Plague", "Plague",              24,  25, "S",  [ 4166666667, 6250000000, 8333333333,12500000000], /*FS calculated normally*/null, 500000000),

    // Medium+ Raids
    advocate_tulk:      new RaidType("advocate_tulk",       "Z5", "Advocate Tulk", "Tulk", "Tulk",                    72,  75, "S",  [69000000,103500000,138000000,207000000], null, [2760000,2760000,2760000,2760000]),

    // Large Raids
    telemachus:         new RaidType("telemachus",          "Z1", "Telemachus", "Telemachus", "Tele",                168, 100, "S",   20000000),
    carnifex:           new RaidType("carnifex",            "Z2", "Carnifex Prime", "Carnifex", "Carni",             120, 100, "S",   35000000),
    rautha:             new RaidType("rautha",              "Z3", "Commander Rautha", "Rautha", "Rautha",             72, 100, "S",   50000000),
    assasin:            new RaidType("assasin",             "Z4", "Kelovar Assassin", "Assassin", "Assa",             72, 100, "S",   65000000),
    agony_and_ecstasy:  new RaidType("agony_and_ecstasy",   "Z6", "Agony and Ecstasy", "Agony, Ecstasy", "A&E",       72, 100, "S",  [216000000, 324000000, 432000000, 648000000],/*FS calculated normally*/null,[8640000, 8640000, 8640000, 8640000]),
    sun_xi:             new RaidType("sun_xi",              "Z7", "Sun Xi's Echo", "Psi-Echo", "Echo",                72, 100, "S",  [360000000, 540000000, 720000000, 1080000000],/*FS calculated normally*/null,[14400000, 14400000, 14400000, 14400000]),
    sludge_serpent:     new RaidType("sludge_serpent",      "Z8", "Sludge Serpent", "Serpent", "Serpent",             72, 100, "S",  120000000),
    kalaxian_cult_mistress: new RaidType("kalaxian_cult_mistress","Z10","Kalaxian Cult-Mistress","Cult-Mistress","Cult",72, 100, "S", [180000000, 234000000, 288000000, 320000000]),
    shuborunth: 		new RaidType("shuborunth",         "Z13","Wulblunralxanachi", "Blob", "Blob",                 72, 100, "S", [200000000, 260000000, 320000000, 400000000]),
    birthday_cake_of_doom: new RaidType("birthday_cake_of_doom", "ZA","Birthday Cake of Doom", "Cake", "Cake",        72, 100, "S", [250000000, 325000000, 400000000, 500000000]),
    anthropist_xenocide_warship:new RaidType("anthropist_xenocide_warship","ZA2","Anthropist Xenocide Warship","Xenocide","Xeno",72,100,"S",[300000000, 390000000, 480000000, 600000000]),
    tentacled_turkey:   new RaidType("tentacled_turkey",   "Z15", "Tentacled Turkey","Turkey","Turkey",               72, 100, "S", [350000000, 455000000, 560000000, 700000000]),
    where_music_meets:  new RaidType("where_music_meets",  "Z16", "Symphony of Two Worlds","Symphony","Symphony",     72, 100, "S", [400000000, 520000000, 640000000, 800000000]),
    reichsmarschall_dule:new RaidType("reichsmarschall_dule","Z19", "Reichsmarschall Dule", "R. Dule", "R. Dule",     36, 100, "S",[2000000000, 2600000000, 3200000000, 4000000000]),
    dark_hat:           new RaidType("dark_hat",           "ZA3", "Dark Hat", "D. Hat", "D. Hat",                     30, 100, "S",[1000000000, 1300000000, 1600000000, 2000000000]),
    rampaging_rackalax: new RaidType("rampaging_rackalax", "ZA4", "Rampaging Rackalax", "Rackalax", "Rack",           30, 100, "S",[1000000000, 1300000000, 1600000000, 2000000000]),
    infected_warwalker_squad:new RaidType("infected_warwalker_squad","C1-2", "Infected Warwalker Squad", "Infected II", "Inf. II", 36, 50, "S", [8333333333, 12500000000, 16666666667, 25000000000], /*FS calculated normally*/null, 500000000),
    contest_winner1:    new RaidType("contest_winner1",    "S", "Hyper-Con Havoc", "Hyper-Con", "Hyper-Con",          72, 50, "S", [8333333333,12500000000,16666666667,25000000000], /*FS calculated normally*/null, 500000000),

    // Large Plus Raids
    robotic_rautha:     new RaidType("robotic_rautha",      "Z5", "Robotic Rautha", "Rautha 2.0", "Robo Rautha",      72, 125, "S",   [135000000,202500000,270000000,405000000], null, [3240000,3240000,3240000,3240000]),
    kulnarxex_subjugator_1:new RaidType("kulnarxex_subjugator_1","S","Kulnar-Xex Subjugator","K-X Subjugator","KX Sub",8, 125, "S", 12500000000, /*FS calculated normally */null, 200000000),
    kulnarxex_elite_subjugator_1:new RaidType("kulnarxex_elite_subjugator_1","S","Kulnar-Xex Elite Subjugator","K-X E. Subjugator","KX ELITE Sub",8, 125, "S", 125000000000, /*FS calculated normally */null, 2000000000),
    weiqi_game_1:       new RaidType("weiqi_game_1",       "Z20", "Weiqi Game", "Weiqi Game", "Weiqi",                36, 180, "S", 90000000000, /*FS calculated normally */null, 1000000000),

    // Epic Raids
    colonel:            new RaidType("colonel",             "Z1", "Psychic Colonel", "CC Colonel", "Col.",           168, 250, "S",  150000000),
    vespasia:           new RaidType("vespasia",            "Z2", "Vespasia's Android", "Vespasia Bot", "Vesp",      168, 250, "S",  250000000),
    generalrahn:        new RaidType("generalrahn",         "Z3", "Centurian General", "CC General", "General",      168, 250, "S",  350000000),
    natasha:            new RaidType("natasha",             "Z4", "Natasha Cybersmash", "Cybersmash", "Cyber-S",     168, 250, "S",  450000000),
    mercury:            new RaidType("mercury",             "Z6", "Mercury", "Mercury", "Mercury",                    72, 250, "S",  [618750000, 928125000, 1237500000, 1856250000],/*FS calculated normally*/null,[14850000, 14850000, 14850000, 14850000]),
    hultex_quibberath:  new RaidType("hultex_quibberath",   "Z7", "Guldax Quibberath", "Quibberath", "Quib",         168, 250, "S",  [1031250000, 1546875000, 2062500000, 3093750000],/*FS calculated normally*/null,[24750000, 24750000, 24750000, 24750000]),
    commander_veck:     new RaidType("commander_veck",      "Z8", "Centurian Storm Commander", "Storm", "Storm",     168, 250, "S",  900000000),
    reaver:             new RaidType("reaver",              "Z9", "Galactic Reaver", "Reaver", "Reaver",              72, 250, "S", 1000000000),
    the_hat:            new RaidType("the_hat",            "Z10", "The Hat", "Hat", "Hat",         	                  72, 250, "S", [1100000000, 1475000000, 1850000000, 2200000000]),
    g_rahn:             new RaidType("g_rahn",             "Z12", "G. Rahn", "G. Rahn", "G. Rahn",                    72, 250, "S", [1200000000, 1560000000, 1920000000, 2400000000]),
    guan_yu:            new RaidType("guan_yu",             "ZA", "Guan Yu", "Guan", "Guan",                          72, 250, "S", [1300000000, 1690000000, 2080000000, 2600000000]),
    bile_beast:         new RaidType("bile_beast",         "ZA2", "Bile Beast", "Bile", "Bile",                       72, 250, "S", [1400000000, 1820000000, 2240000000, 2800000000]),
    al_husam:           new RaidType("al_husam",           "Z17", "Al-Husam", "Al-Husam", "Al-Husam",                 72, 250, "S", [1500000000, 1950000000, 2400000000, 3000000000]),
    noir:               new RaidType("noir",               "Z18", "Noir", "Noir", "Noir",                             72, 250, "S", [1600000000, 2080000000, 2560000000, 3200000000]),
    sky_commander_bethany:new RaidType("sky_commander_bethany","Z19","Sky Commander Bethany","Bethany","Bethany",     36, 250, "S", [2500000000, 3250000000, 4000000000, 5000000000]),
    void_master:        new RaidType("void_master",        "ZA3", "Void Master", "V. Master", "V. Master",            30, 250, "S", [1250000000, 1625000000, 2000000000, 2500000000]),
    giant_kwelshax:     new RaidType("giant_kwelshax",     "ZA4", "Giant Kwelshax", "Kwelshax", "Kwel",               30, 250, "S", [1250000000, 1625000000, 2000000000, 2500000000]),
    flying_saucer_mothership:new RaidType("flying_saucer_mothership","C1-3", "Flying Saucer Mothership", "Mothership", "Mothership", 48, 75, "S", [12500000000,18750000000,25000000000,37500000000], /*FS calculated normally*/null, 500000000),
    sapphire:           new RaidType("sapphire",           "Z22", "Sapphire", "Sapphire", "Sapphire",                 48,  75, "S", [13333333333,20000000000,26666666667,40000000000], /*FS calculated normally*/null, 500000000),

    // Epic+ Raids
    centurian_sentinel: new RaidType("centurian_sentinel",  "Z5", "Centurian Sentinel", "CC Sentinel", "Sentinel",   168, 275, "S", [340000000,510000000,680000000,1020000000], null, [7418182,7418182,7418182,7418182]),

    // Colossal Raids
    mermara:            new RaidType("mermara",             "Z6", "Mermara", "Mermara", "Mermara",                   168, 500, "S", [1395000000, 2092500000, 2790000000, 4185000000],/*FS calculated normally*/null,[25110000, 25110000, 25110000, 25110000]),
    nemo:               new RaidType("nemo",                "Z7", "Nemo",    "Nemo", "Nemo",                         168, 500, "S", [2325000000, 3487500000, 4650000000, 6975000000],/*FS calculated normally*/null,[41850000, 41850000, 41850000, 41850000]),
    the_emperor:        new RaidType("the_emperor",         "Z8", "Dule's Robot", "Dule's Bot", "Dule",              168, 500, "S", 5000000000),
    dule_warmaster:     new RaidType("dule_warmaster",      "Z9", "Centurian Councilor", "CC Councilor", "Councilor", 24, 500, "S", 2500000000),
    crush_colossa:      new RaidType("crush_colossa",      "Z10", "Crush Colossa", "Colossa", "Crush",                72, 500, "S", [3000000000, 3900000000, 4800000000, 6000000000]),
    nosferatu_nick:     new RaidType("nosferatu_nick",     "Z14", "Nosferatu Nick", "Nick", "Nick",                   24, 500, "S", 3500000000),
    niflung_boar:       new RaidType("niflung_boar",        "ZA", "Niflung Boar", "Boar", "Boar",                     30, 500, "S", 4000000000),
    vlarg_relic_hunter: new RaidType("vlarg_relic_hunter", "ZA2", "Vlarg Relic Hunter", "R. Hunter", "Vlarg",         30, 500, "S", 4500000000),
    noir2:              new RaidType("noir2",              "Z19", "Noir (II)", "Noir (II)", "Noir2",                  30, 500, "S", 5000000000),
    the_saboteur:       new RaidType("the_saboteur",       "ZA3", "The Saboteur", "Saboteur", "Saboteur",             30, 500, "S", 5000000000),
    the_tyraness:       new RaidType("the_tyraness",       "ZA4", "The Tyraness", "Tyraness", "Tyraness",             30, 500, "S", 5000000000),
    hwang:              new RaidType("hwang",             "C1-4", "Hwang", "Hwang", "Hwang",                          64, 100, "S", [16666666667,25000000000,33333333333,50000000000], /*FS calculated normally*/null, 500000000),
    mutheru:            new RaidType("mutheru",            "Z22", "Multheru", "Multheru", "Multheru",                 64, 100, "s", [17666666667,26500000000,35333333333,53000000000], /*FS calculated normally*/null, 500000000),

    // Colossal+ Raids
    besalaad_warmaster: new RaidType("besalaad_warmaster",  "Z5", "Besalaad Warmaster", "Warmaster", "Warmaster",    168, 550, "S",  [767250000, 1150875000, 1534500000, 2301750000], null, [12555000,12555000,12555000,12555000]),
    pinatas_revenge1:	new RaidType("pinatas_revenge1",     "S",  "Pinata's Revenge", "Pinata II", "Pinata",        128, 500, "S",  [50000000000, 87500000000, 110000000000, 205000000000], null, 1000000000),

    // Titanic Raids
    king_krandar1:	    new RaidType("king_krandar1",        "E",  "King Krandar", "Krandar", "Krandar",    	       44, 500, "E",  [250000000000, 250000000000, 250000000000, 250000000000], null, 1000000000),
    sinaroms_death_flora:new RaidType("sinaroms_death_flora","C1-5","Sinarom's Death Flora","Death Flora II","D.F. II",72,250, "S",  [ 41666666667,  62500000000,  83333333333, 125000000000], /*FS calculated normally*/null, 500000000),
    professor_bonderbrand:new RaidType("professor_bonderbrand","Z22","Professor Bonderbrand","Bonderbrand","Prof Bond",72,250, "S",  [ 41666666667,  62500000000,  83333333333, 125000000000]),
    arcade_gas_attack:  new RaidType("arcade_gas_attack",   "AR", "Arcade Gas Attack", "A G Attack", "Gas Attack",     72, 250, "?", [36666666667,55000000000,73333333333,110000000000], /*FS calculated normally*/null, 500000000),

    // Galactic Raids
    sultan_shrakzan1:	new RaidType("sultan_shrakzan1",     "S",  "Sultan Shrakzan", "Shrakzan", "Shrakzan",    	  44, 500, "S",  [300000000000, 300000000000, 300000000000, 300000000000], null, 1000000000),
    tourniquet_seven_five:new RaidType("tourniquet_seven_five","C1-6", "Tourniquet 7.5", "Tourniquet 7.5", "T7.5",    80, 500, "S",  [ 83333333333, 125000000000, 166666666667, 250000000000], /*FS calculated normally*/null, 500000000),
    noir3:              new RaidType("noir3",              "Z22", "Noir (III)", "Noir (III)", "Noir3",                80, 500, "S",  [ 83333333333, 125000000000, 166666666667, 250000000000], /*FS calculated normally*/null, 500000000),
    arcade_gas_monster: new RaidType("arcade_gas_monster",  "AR", "Arcade Gas Monster", "A G Monster", "Gas Monster", 80, 500, "S",  [ 73333333333, 110000000000, 146666666667, 220000000000], /*FS calculated normally*/null, 500000000),

    // Aliance Raids
    // Small Raids
    krakak:             new RaidType("krakak",              "A0", "Krakak Swarm", "Swarm", "Swarm",                  120,  10, "H",    4500000),
    kang:               new RaidType("kang",                "A1", "Kang", "Kang", "Kang",                            120,  10, "H",    5000000),
    crossbones_squadron: new RaidType("crossbones_squadron","A2", "Crossbones Squadron", "Crossbones", "XBones",     120,  10, "H",    8000000),
    colonel_mustard:    new RaidType("colonel_mustard",     "A3", "Colonel Mustard", "Mustard", "Mustard",           120,  10, "H",   12000000),
    professor_squid:    new RaidType("professor_squid",     "A4", "Professor Squid", "Squid", "Squid",               120,  10, "H",   18000000),
    terminus_death_squad: new RaidType("terminus_death_squad","A5", "Terminus Death Squad", "Death Squad", "Death Squad",120,10,"H",  24000000),
    rabid_reindeer:     new RaidType("rabid_reindeer",      "A8", "Rabid Reindeer", "Reindeer", "Reindeer",           60,  50, "H",  [62500000, 81250000, 100000000, 125000000]),

    // Medium Raids
    infection:          new RaidType("infection",           "A0", "Infected Squad",    "Infected", "Infected",       144,  50, "H",   30000000),
    flora:              new RaidType("flora",               "A1", "Ruomyes' Death Flora", "Death Flora", "Flora",    144,  50, "H",   35000000),
    psychic_cyborg:     new RaidType("psychic_cyborg",      "A2", "Mr. Justice", "Justice", "Justice",               144,  50, "H",   45000000),
    grislak:            new RaidType("grislak",             "A3", "Grislak", "Grislak", "Grislak",                   144,  50, "H",   55000000),
    qin_legion:         new RaidType("qin_legion",          "A4", "Qin Legion",    "Legion", "Legion",               144,  50, "H",   65000000),
    terminus_interceptor_squadron: new RaidType("terminus_interceptor_squadron","A5", "Terminus Interceptor Squadron", "Interceptor", "Interceptor", 144, 50,"H",75000000),
    luna:               new RaidType("luna",                "A6", "Luna", "Luna", "Luna",                            120,  50, "H",   50000000),
    trashmaster:        new RaidType("trashmaster",         "A6", "Trashmaster Colby", "Colby", "Colby",             144,  50, "H",  100000000),
    santas_workshop:    new RaidType("santas_workshop",     "A8", "SANTA's Workshop", "Workshop", "Workshop",         72,  50, "H",  125000000),
    the_mega_mimes:     new RaidType("the_mega_mimes",      "A2-2", "The Mega Mimes", "Mimes", "Mimes",               84,  50, "H",   50000000, null, 2000000),

    // Large Raids
    saucers:            new RaidType("saucers",             "A0", "Flying Saucers",    "Saucers", "Saucers",         168,  100, "H",    55000000),
    tourniquet:         new RaidType("tourniquet",          "A1", "Tourniquet 7", "Tourniquet 7", "T7",              168,  100, "H",    60000000),
    rylattu_exterminator: new RaidType("rylattu_exterminator","A2", "Rylattu Exterminator", "Exterminator","Exterminator",168,100,"H", 100000000),
    peacemaker_500:     new RaidType("peacemaker_500",      "A3", "Peacemaker 500",    "Peacemaker", "Peacemaker",   168,  100, "H",   140000000),
    kaltharan_devourer: new RaidType("kaltharan_devourer",  "A4", "Kaltharan Devourer", "Devourer", "Devourer",      168,  100, "H",   180000000),
    terminus_juggernaut: new RaidType("terminus_juggernaut","A5", "Terminus Juggernaut", "Juggernaut", "Juggernaut", 168,  100, "H",   200000000),
    legacy_bot:         new RaidType("legacy_bot",          "A6", "Legacy Bot",    "Legacy", "Legacy",               168,  100, "H",   250000000),
    wahsh:              new RaidType("wahsh",               "AX", "Wahsh Al-Sahraa", "Wahsh", "Wahsh",                84,  100, "H", [ 500000000, 1200000000, 3125000000, 7812500000]),
    haunted_house:      new RaidType("haunted_house",       "AX", "Haunted House", "H. House", "House",              168,  100, "H",   350000000),
    crazed_santa:       new RaidType("crazed_santa",        "AX", "Crazed Santa", "Santa", "Santa",                   84,  100, "H", [ 400000000,  520000000,  640000000,  800000000]),
    kristy_love:        new RaidType("kristy_love",         "AX", "Kristy Love", "Kristy", "Love",                    84,  100, "H", [ 450000000,  585000000,  720000000,  900000000]),
    gedrocht:           new RaidType("gedrocht",            "A9", "Gedrocht", "Gedrocht", "Gedrocht",                 84,  100, "H", [ 500000000,  650000000,  800000000, 1000000000]),
    nutcracker_sweet:   new RaidType("nutcracker_sweet",    "A11", "Nutcracker Sweet", "Sweet", "Sweet",              84,  100, "H", [ 750000000, 1000000000, 1500000000, 3000000000]),
    crazy_jalfrezi:     new RaidType("crazy_jalfrezi",      "A12", "The Crazy Jalfrezi", "Jalfrezi", "Freezi",        84,  100, "H", [1000000000, 1250000000, 2000000000, 4000000000]),
    patti:              new RaidType("patti",               "A13", "PATTI", "PATTI", "PATTI",                         84,  100, "H", [1000000000, 1250000000, 2000000000, 4000000000]),
    crimzo_the_killer_clown:new RaidType("crimzo_the_killer_clown","A2-1","Crimzo the Killer Clown","Crimzo","Crimzo",84,  100, "H", [1000000000, 1250000000, 2000000000, 4000000000]),
    the_neon_knights:   new RaidType("the_neon_knights",    "A2-2", "The Neon Knights", "Neon", "Neon",               84,  100, "H",   500000000, null, 10000000),
    the_gamma_hammers:  new RaidType("the_gamma_hammers",   "A2-3", "The Gamma Hammers", "Gammas", "Gammas",          84,  100, "H",  2500000000, null, 50000000),
    the_chem_runners:   new RaidType("the_chem_runners",    "A2-4", "The Chem-Runners", "C-Runners", "Chem",          84,  100, "H", 50000000000, null, 1000000000),
    kulnar_xex_shock_trooper_1:new RaidType("kulnar_xex_shock_trooper_1","A2-5","Kulnar-Xex Shock Trooper","K-X Shock Trooper","KX Shock",72,100,"H",500000000,null,10000000),

    // Epic Raids
    lurking_horror:     new RaidType("lurking_horror",      "A2", "Lurking Horror", "Lurking", "Lurking",            168,  100, "H",  250000000),
    ship_of_the_damned: new RaidType("ship_of_the_damned",  "A3", "Ship of the Damned", "Damned", "Damned",          168,  100, "H",  300000000),
    mecha_wyrm:         new RaidType("mecha_wyrm",          "A4", "Mecha-Wyrm", "Wyrm", "Wyrm",                      168,  100, "H",  350000000),
    contest_winners:    new RaidType("contest_winners",     "A6", "Shadows of the Void", "Shadows", "Shadows",       168,  100, "H",  500000000),
    genesis:            new RaidType("genesis",             "A5", "Genesis", "Genesis", "Genesis",                   165,  100, "H", 1000000000),
    celebration_enhancer_1: new RaidType("celebration_enhancer_1","AX","Celebration Enhancer J-54","Celebrator","Celeb",84,100, "H",  600000000),
    quiskan_psi_hound:  new RaidType("quiskan_psi_hound",   "A7","Quiskan Psi-Hound","Psi-Hound","Hound",            168,  100, "H", [1000000000, 1500000000, 2500000000, 10000000000]),
    ms_myriad_and_steelstike: new RaidType("ms_myriad_and_steelstike","A10","Ms. Myriad and Steelstrike","M & S","M & S",168,100,"H",[1500000000, 2000000000, 3000000000, 12500000000]),
    kulnarxex_tank_1:   new RaidType("kulnarxex_tank_1",  "A2-4", "Kulnar-Xex Tank", "K-X Tank", "KX Tank",           72,  100, "H", 2500000000, null, 50000000),

    // Titanic Raids
    thyestean_banquet1: new RaidType("thyestean_banquet1","AX", "Thyestean Banquet", "Banquet", "Banquet",            72,  100, "H", 50000000000),

    // Energy Raids
    vince_vortex:       new RaidType("vince_vortex",        "E", "Vince Vortex", "Vince", "Vince",                    72,  500, "E",  600000000),

    // Operations: Scavenger's Scramble
    centi_prider_scavenger:new RaidType("centi_prider_scavenger","OP-SS","Centi Prider Scavenger","Centi Scav","Centi Scav",18,25,"S",[5000000000,12000000000,0,0]),
    elite_centi_prider_scavenger:new RaidType("elite_centi_prider_scavenger","OP-SS","Elite Centi Prider Scavenger","E. Centi Scav","E. Centi Scav",18, 25, "S", [5000000000,12000000000,0,0]),
    kulnar_xex_scavenger:new RaidType("kulnar_xex_scavenger","OP-SS","Kulnar-Xex Scavenger","Kulnar Scav","Kulnar Scav",18, 50,"S", [10000000000,24000000000,0,0]),
    elite_kulnar_xex_scavenger:new RaidType("elite_kulnar_xex_scavenger","OP-SS","Elite Kulnar-Xex Scavenger","E. Kulnar Scav","E. Kulnar Scav",18, 50, "S", [10000000000,24000000000,0,0]),
    vlarg_scavenger:     new RaidType("vlarg_scavenger","OP-SS","Vlarg Scavenger","Vlarg Scav","Vlarg Scav",          18, 75, "S", [15000000000,36000000000,0,0]),
    elite_vlarg_scavenger:new RaidType("elite_vlarg_scavenger","OP-SS","Elite Vlarg Scavenger","E. Vlarg Scav","E. Vlarg Scav",18, 75, "S", [15000000000,36000000000,0,0]),
    besalaad_warrior:    new RaidType("besalaad_warrior", "OP-SS", "Besalaad Warrior", "B. Warrior", "B. Warrior",    18, 100, "S", [30000000000,100000000000,0,0]),
    strange_parasite:    new RaidType("strange_parasite", "OP-SS", "Strange Parasite", "Parasite", "Parasite",        18, 100, "S", [35000000000,115000000000,0,0]),
    besalaad_commander:  new RaidType("besalaad_commander","OP-SS","Besalaad Commander","B. Commander","B. Commander",18, 100, "S", [45000000000,125000000000,0,0]),
    pumpkin_pirate_scavenger:new RaidType("pumpkin_pirate_scavenger","OP-SS","Pumpkin Pirate Scavenger","Pumpkin Scav","Pumpkin Scav",18, 100, "S",[35000000000,115000000000,0,0]),

    // Operations: Deep Cyan Sea
    kalaxian_cultist_ship:new RaidType("kalaxian_cultist_ship","OP-DCS", "Kalaxian Cultist Ship", "Kalax Ship", "Kalax Ship", 18, 25, "S", [10000000000,24000000000,0,0]),
    kalaxian_cultist_bikers:new RaidType("kalaxian_cultist_bikers","OP-DCS", "Kalaxian Cultist Bikers", "Kalax Biker", "Kalax Biker", 18, 50, "S", [20000000000,36000000000,0,0]),
    kalaxian_cultists:   new RaidType("kalaxian_cultists","OP-DCS", "Kalaxian Cultists", "Kalax Cult", "Kalax Cult",  18, 75, "S", [20000000000,48000000000,0,0]),
    kalaxian_cult_master:new RaidType("kalaxian_cult_master", "OP-DCS", "Kalaxian Cult Master", "K. Cult Master", "K. Cult Master", 18, 100, "S", [50000000000,150000000000,0,0]),
    slither:             new RaidType("slither", "OP-DCS", "Slither", "Slither", "Slither",                           18, 100, "S", [70000000000,200000000000,0,0]),
    kalaxian_projection: new RaidType("kalaxian_projection", "OP-DCS","Kalaxian Projection","Projection","Projection",18, 50, "S", [20000000000,36000000000,0,0]),


    // World Raids
    // Infestation Trilogy
    inf_ship:           new RaidType("inf_ship",            "WR", "The Python", "Python", "Python WR",                72,  90000, "SEH", "Infinite", "N/A",   1000000000),
    inf_colony:         new RaidType("inf_colony",          "WR", "Infested Colony", "Colony", "Colony WR",           72,  90000, "SEH", "Infinite", "N/A",   1000000000),
    inf_lair:           new RaidType("inf_lair",            "WR", "Alien Lair", "Lair", "Lair WR",                    72,  90000, "SEH", "Infinite", "N/A",   1000000000),

    general_skorzeny:   new RaidType("general_skorzeny",    "WR", "General Skorzeny", "Skorzeny", "Skorz WR",         72,  90000, "SEH", "Infinite", "N/A", 100000000000),

    cerebral_destroyer: new RaidType("cerebral_destroyer",  "WR", "Cerebral Destroyer", "Cerebral", "CD WR",          72,  90000,"SEH", "Infinite", "N/A",   10000000000),

    wr_space_pox:       new RaidType("wr_space_pox",        "WR", "Intergalactic Space Pox", "WR Pox", "WR Pox",      72,  90000, "SEH", "Infinite", "N/A",   5000000000),

    kraken:             new RaidType("kraken",              "WR", "Kraken", "Kraken", "Kraken WR",                    72,  90000, "SEH", "Infinite", "N/A",  50000000000),

    christmas_montage:  new RaidType("christmas_montage",   "WR", "Christmas Campaign", "Christmas", "Xmas WR",       48,  90000, "SEH", "Infinite", "N/A",   5000000000),

    schism:             new RaidType("schism",              "WR", "Schism", "Schism", "Schism WR",                   120,  90000, "SEH", "Infinite", "N/A",  50000000000),

    inventors_revenge:  new RaidType("inventors_revenge",   "WR", "Inventor's Revenge", "Revenge", "Revenge WR",      72,  90000, "SEH", "Infinite", "N/A",  75000000000),

    hel:                new RaidType("hel",                 "WR", "Hel", "Hel", "Hel WR",                             72,  90000, "SEH", "Infinite", "N/A",  75000000000),

    centi_priders:      new RaidType("centi_priders",       "WR", "Centi Priders", "Centies", "Centies WR",           72,  90000, "SEH", "Infinite", "N/A",  75000000000),

    kulnar_xex_battle_station_1:new RaidType("kulnar_xex_battle_station_1","WR","Kulnar-Xex Battle Station","K-X Battle Station","KX BS WR",72,90000,"SEH","Infinite","N/A",200000000000),

    cow_abduction_1:    new RaidType("cow_abduction_1",     "WR", "Rylattu Cow Abduction", "Cow Abduction", "Cow WR", 72, 90000, "SEH", "Infinite", "N/A",   10000000000),

    trouble_in_tokyo:   new RaidType("trouble_in_tokyo",    "WR", "Trouble in Tokyo", "Tokyo", "Tokyo WR",           120, 90000, "SEH", "Infinite", "N/A",  400000000000),

    kalaxian_assault:   new RaidType("kalaxian_assault",    "WR", "Kalaxian Assault", "Kalax Assault", "Kalax WR",    96, 99999, "SEH", "Infinite", "N/A",  200000000000),

    contest_winner:     new RaidType("contest_winner",      "WR", "Hyper-Con Havoc", "Havoc WR", "Havoc WR",          96, 99999, "SEH", "Infinite", "N/A",  200000000000),

    // Rare Spawns
    raging_snowman:     new RaidType("raging_snowman",      "RS", "Raging Snowman", "Snowman", "Snowman RS",          24,  90000, "SEH", "Infinite", "N/A",   2000000000),

    space_pox_mary:     new RaidType("space_pox_mary",      "RS", "Space Pox Mary", "Mary", "Mary RS",                24,  90000, "SEH", "Infinite", "N/A",   2000000000),

    cerebral_ceo:       new RaidType("cerebral_ceo",        "RS", "Cerebral CEO", "CEO", "CEO RS",                    24,  90000, "SEH", "Infinite", "N/A",   2000000000),

    penelope_wellerd:   new RaidType("penelope_wellerd",    "RS", "Penelope Wellerd", "Wellerd", "Wellerd RS",        24,  90000, "SEH", "Infinite", "N/A",   2000000000),

    h8:                 new RaidType("h8",                  "RS", "H8", "H8", "H8 RS",                                24,  90000, "SEH", "Infinite", "N/A",   2000000000),

    inventors_scheme:   new RaidType("inventors_scheme",    "RS", "Inventor's Scheme", "Scheme", "Scheme RS",         24,  90000, "SEH", "Infinite", "N/A",   2000000000),

    predator_moon:      new RaidType("predator_moon",       "RS", "Predator Moon", "Predator", "Moon RS",             24,  90000, "SEH", "Infinite", "N/A",   2000000000),

    "5th_planet":       new RaidType("5th_planet",          "RS", "5th Planet", "5th Planet", "5th Planet RS",        24,  90000, "SEH", "Infinite", "N/A",   2000000000),

    cerebral_monster_mech:new RaidType("cerebral_monster_mech","RS", "Cerebral Monster Mech", "Cerebral MM", "CMM RS",24,  90000, "SEH", "Infinite", "N/A",  20000000000),

    kulnarxex_scout_ships_1:new RaidType("kulnarxex_scout_ships_1","RS","Kulnar-Xex Scout Ships","K-X Scout Ships","KX Scout RS",24,90000,"SEH","Infinite","N/A",25000000000),

    kulnarxex_bombarder_1:new RaidType("kulnarxex_bombarder_1","RS","Kulnar-Xex Bombarder","K-X Bombarder","KX Bomb RS",24,90000,"SEH", "Infinite", "N/A",   25000000000),

    ship_pinata:		new RaidType("ship_pinata",         "RS", "Ship Pinata", "Pinata", "Pinata RS",               24, 90000, "SEH", "Infinite", "N/A",   25000000000),

    dimetrodon_riot:    new RaidType("dimetrodon_riot",     "RS", "Dimetrodon Riot", "D. Riot", "Riot RS",            24, 90000, "SEH", "Infinite", "N/A",  200000000000),

    besalaad_warmasterrs:new RaidType("besalaad_warmasterrs","RS","Besalaad Elite Warmaster", "E. Warmaster","BEW RS",24, 90000, "SEH", "Infinite", "N/A",   50000000000)
};

