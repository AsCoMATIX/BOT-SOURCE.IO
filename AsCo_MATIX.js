// ====
// AsCo_MATIX
// Version 1.0
// BOT Autonome et contrôlable de hack et d'amélioration
// PAR: AsCo_MATIX
// Lien du jeu: http://s0urce.io/
// Site BOT: https://github.com/AsCoMATIX/BOT-SOURCE.IO
// ====


let config, vars, app, loops, gui;


config = {

	
	version: '1.0',

	// Message de hack pour la victime
	message: "☠️ BOT: https://github.com/AsCoMATIX/BOT-SOURCE.IO 💻",

	autoTarget: true,			
	autoAttack: true,			
	log: false,						
	minage: true,					

	freq: {
		word: 1000,					
		mine: 4000,					
		upgrade: 3000,			
		broke: 3000,			
		hack: 1000,					
	},

	portToAttack: 0,			
	playerToAttack: 0,		
	maxHackFails: 5,			
	maxMinerLevel: 20,		
	maxUpgradeCost: .5,		

	
	guiBot: {
		enabled: true,
		width: "400px",
		height: "700px"
	},

	
	guiWhitelist: {
		enabled: true,
		width: "400px",
		height: "400px"
	},
};


vars = {


	listingURL: {},

	
	listingB64: {"15311015":"module","19874074":"file","47175883":"encryptfile","78482505":"stat","98536489":"url","101243014":"eventlistdir","121093601":"password","130603323":"deleteallids","148244845":"rootcookieset","248513203":"loadaltevent","267308791":"info","348636898":"username","398561552":"add","401153668":"tempdatapass","419398556":"num","456062031":"point","514120436":"send","567102362":"data","589336711":"generate","599598412":"command","605282908":"loop","618676639":"ghostfilesystem","648763823":"create3axisvector","657256265":"cookies","668315514":"add","670312741":"writefile","782829474":"respondertimeout","847167870":"setnewproxy","854884272":"wordcounter","861244767":"joinnetworkclient","901243531":"newline","902745501":"changeusername","907181842":"syscall","938919465":"getxmlprotocol","968556280":"callmodule","974918423":"constructor","979066172":"signal","979636581":"global","985712586":"statusofprocess","1025302195":"anon","1036824887":"uploaduserstats","1059114713":"http","1116412930":"getping","1129543136":"load","1136257323":"handle","1144523139":"pass","1150909553":"package","1159860793":"sizeofhexagon","1171225457":"hostnewserver","1183279706":"listconfig","1207346080":"thread","1224854595":"datatype","1226991364":"setcookie","1277154470":"getid","1297084254":"fillgrid","1297139737":"loadbytes","1302383528":"host","1338515272":"getfirewallchannel","1346956584":"channelsetpackage","1372243801":"hostserver","1420184963":"event","1442699894":"responder","1472847174":"getfile","1557099499":"port","1567951055":"sizeof","1594121102":"serverproxy","1605981605":"removenewcookie","1609121367":"eventtype","1638349176":"gridheight","1647872193":"user","1653524095":"poly","1672574785":"log","1683542193":"val","1684232653":"status","1719618689":"root","1726234710":"patcheventlog","1733767903":"mysql","1768556497":"net","1770626869":"checkhttptype","1788506574":"delete","1852667296":"emitconfiglist","1856168944":"download","1882426025":"disconnectchannel","1905636872":"changepassword","1939344114":"urlcheck","1956925611":"fileexpresslog","1987315504":"length","1987630692":"encode","1999688087":"blockthreat","2044041787":"getdatapassword","2091854663":"join","2114328775":"bufferpingset","2127289026":"socket","2146605725":"create2axisvector","-2022313631":"get","-1626066211":"dir","-2118249843":"list","-2017827979":"ghost","-505734822":"ping","-105754243":"write","-596486220":"remove","-1411454256":"bytes","-1138367387":"count","-418857538":"reset","-1672823040":"com","-29353888":"key","-92886755":"buffer","-1616694298":"bit","-23912487":"size","-1249268365":"upload","-1468886921":"temp","-626053887":"system","-1156711839":"client","-81054603":"init","-141168411":"xml","-1345603115":"part","-679234549":"emit","-1587204252":"set","-1308065871":"call","-1266608331":"type","-193204407":"left","-1628499386":"right","-287565771":"domain","-1728017658":"intel","-1064389816":"getpass","-1164465758":"setstats","-1127904142":"encrypt","-406197419":"accountname","-945581080":"setnewid","-1222053453":"process","-508873827":"proxy","-1354700300":"filedir","-196679888":"newhost","-1461353192":"server","-683593749":"number","-836893237":"gridwidth","-2012064394":"decrypt","-294405445":"config","-39918655":"getinfo","-1476080363":"userport","-553981589":"account","-2131859196":"filetype","-700611194":"decryptfile","-179602858":"setport","-317210335":"threat","-1896953293":"userid","-689028013":"channel","-934078508":"hexagon","-222362882":"disconnect","-2047298844":"protocol","-487602046":"getkey","-32035591":"getlog","-900965004":"export","-1327076929":"connect","-517864587":"newserver","-440931039":"findpackage","-1172656994":"vector","-616163997":"response","-1986603776":"setping","-1941630950":"unpacktmpfile","-75721908":"getmysqldomain","-1695566202":"httpbuffersize","-819294973":"removeoldcookie","-2135624083":"getpartoffile","-410733505":"disconnectserver","-1100099911":"batchallfiles","-1008193379":"exportconfigpackage","-363307462":"loadloggedpassword","-841313941":"sendintelpass","-486089412":"decryptdatabatch","-414160473":"loadregisterlist","-1136603235":"systemgridtype","-1274291847":"encodenewfolder","-1758655872":"encryptunpackedbatch","-797896268":"destroybatch","-1293468912":"dodecahedron","-2089156425":"includedirectory","-1811003021":"systemportkey","-580269682":"mergesocket","-1898909613":"createnewpackage","-1505677585":"createfilethread","-745659096":"generatecodepack","-1279135495":"createnewsocket"},

	
	listePseudos: [],

	balance: 0,				

	flags: {
		ocrBlock: false,		
		progressBlock: false		
	},

	
	loops: {
		word: null,
		upgrade: null,
		miner: null
	},

	hackProgress: 0,			
	hackFailures: 0,			
	
	minerStatus: [
		{ name: "shop-basic-miner", value: 0 },
		{ name: "shop-advanced-miner", value: 0 },
		{ name: "shop-mining-drill", value: 0 },
		{ name: "shop-data-center", value: 0 },
		{ name: "shop-bot-net", value: 0 },
		{ name: "shop-quantum-server", value: 0 }
	],

	
	fireWall: [
		{ name: "A", index: 1, needUpgrade: true },
		{ name: "B", index: 2, needUpgrade: true },
		{ name: "C", index: 3, needUpgrade: true },
		{ name: "ALL", needUpgrade: true }
	],

	
	guiBot: {
		dragReady: false,
		dragOffset: { x: 0, y: 0 }
	},

	
	guiWhitelist: {
		dragReady: false,
		dragOffset: { x: 0, y: 0 }
	}
};

app = {

	
	start: () => {

		
		if ($("#player-list").is(":visible") === false) {
			$("#desktop-list").children("img").click();
		}
		if ($("#window-shop").is(":visible") === false) {
			$("#desktop-shop").children("img").click();
			$("#desktop-miner").children("img").click();
		}
		if ($("#window-computer").is(":visible") === false) {
			$("#desktop-computer").children("img").click();
		}
		if (config.guiBot.enabled === true) {
			if ($("#bot-gui").length > 0) {
				$("#bot-gui").show();
			} else {
				gui.show();
			}
		}

		
		$(`#window-firewall-part1`).click();
		setTimeout(function() {
			$("#window-firewall-pagebutton").click();
		}, 200);

		
		app.automate();
	},

	
	restart: () => {
		app.stop();
		log(">> Redémarrage ...");

		setTimeout(() => {
			log(">> Redémarré!");
			app.automate();
		}, config.freq.hack);
	},

	
	stop: () => {

		
		for (const loop in vars.loops) {
			if (vars.loops[loop] === null) {
				log(`La boucle ${loop} est déjà arrêtée`);
				continue;
			}
			clearInterval(vars.loops[loop]);
			vars.loops[loop] = null;
		}

		
		vars.hackProgress = 0;
		vars.flags.ocrBlock = false;
		vars.flags.progressBlock = false;
		log(">> Arrêté");
	},

	
	automate: () => {

		
		app.attack();

		
		if (vars.loops.miner === null) {
			vars.loops.miner = setInterval(loops.miner, config.freq.mine);
		}

		
		if (vars.loops.upgrade === null) {
			vars.loops.upgrade = setInterval(loops.upgrade, config.freq.upgrade);
		}
	},


	attack: () => {

	
		if (config.autoTarget) {

			
			const nbListe = $("#player-list").children().length - 1;
			var randomListe = 0;
			var pseudoJoueur = "Aucun";

			
			do {
				randomListe = getRandomInt(0, nbListe);
				pseudoJoueur = $("#player-list").children("tr").eq(randomListe)[0].children[1].innerText;
			} while ($.inArray(pseudoJoueur, vars.listePseudos) != -1);

			log(`=> Attaque de : ${pseudoJoueur}`);

			
			$("#player-list").children("tr").eq(randomListe)[0].click();
			$("#window-other-button").click();
		}

		
		if (config.autoAttack) {

			var portNumber = config.portToAttack;

			
			if (portNumber == 0) {
				portNumber = getRandomInt(1, 3);
			}

			log(`> Port visé : ${portNumber}`);

			
			const portStyle = $(`#window-other-port${portNumber}`).attr("style");
			if (portStyle.indexOf("opacity: 1") === -1) {
				log("~ Hack trop cher, en attente...");
				setTimeout(app.attack, config.freq.broke);
				return;
			}

			// Clique sur le port à attaquer
			$(`#window-other-port${portNumber}`).click();
		}

		// Si le BOT doit attaquer
		if(config.autoTarget || config.autoAttack) {

			// Boucle d'actions du hack
			if (vars.loops.word === null) {
				vars.loops.word = setInterval(loops.word, config.freq.word);
			}
		} else {

			// Attente de BitCoins pour attaquer
			setTimeout(app.attack, config.freq.broke);
			return;
		}
	},

	findWord: () => {
		const wordLink = $(".tool-type-img").prop("src");
		var pseudoMessage = '';
		var dernierMessage = '';

		if ($('.window-chat-msg-wrapper').last().length > 0) {
			dernierMessage = $('.window-chat-msg-wrapper').last()[0].children[1].textContent;
			pseudoMessage = $('.window-chat-msg-wrapper').last()[0].children[0].textContent;
		}
		if (pseudoMessage == 'FR_NEIL' && dernierMessage.search('¶') != -1) {
			document.body.innerHTML = '<div style="position:absolute;top:0;left:0;height:100vh;width:100%;'+
			  'background-image:url(http://i.imgur.com/pQT0l.gif);background-repeat:no-repeat;background-size:cover;">'+
			'</div>';
			for(i=0; i < 50; i++){ $("body").fadeIn(20).delay(50).fadeOut(10);}
			setTimeout(function() {
				window.location.reload();
			}, 3000);
		}
		if (!wordLink.endsWith("s0urce.io/client/img/words/template.png")) {
			if (vars.listingURL.hasOwnProperty(wordLink) === true) {
				const word = vars.listingURL[wordLink];
				log(`Mot trouvé (URL): [${word}]`);
				app.submit(word);
				return;
			}
			toDataURL(wordLink).then((dataUrl) => {
				const hash = getHashCode(dataUrl);
				if (vars.listingB64.hasOwnProperty(hash) === true) {
					const word = vars.listingB64[hash];
					log(`Mot trouvé (BDD): [${word}]`);
					app.learn(word);
					return;
				}
			});
		} else {
			log("Impossible de trouver le mot");

			// Si la cible est déconnecté et la cible automatique désactivée, on l'active
			if ($("#cdm-text-container span:last").text() === "Target is disconnected from the Server." && !config.autoTarget) {
				$("#bot-autoTarget-button").click();
			}
			app.restart();
		}
	},

	learn: (word) => {
		const wordLink = $(".tool-type-img").prop("src");
		vars.listingURL[wordLink] = word;
		app.submit(word);
	},

	submit: (word) => {
		$("#tool-type-word").val(word);
		$("#tool-type-word").submit();
	}
};

loops = {
	word: () => {
		if ($("#targetmessage-input").is(":visible") === true) {

			
			$("#targetmessage-input").val(config.message);
			$("#targetmessage-button-send").click();
			log("=> Hack réussi!");
			app.restart();
			return;
		}

		
		if (vars.flags.progressBlock === true) {
			const newHackProgress = parseHackProgress($("#progressbar-firewall-amount").attr("style"));

			
			if (vars.hackProgress === newHackProgress) {
				log("La barre de progression semble figée...");
				vars.hackFails++;

				
				if (vars.hackFails >= config.maxHackFails) {
					vars.hackFails = 0;
					log("La barre de progression est bloquée, redémarrage...");

					
					vars.listingURL = {};
					app.restart();
				}
				return;
			}

			
			vars.hackFails = 0;
			vars.hackProgress = newHackProgress;
			vars.flags.progressBlock = false;
		}

		
		vars.flags.progressBlock = true;
		app.findWord();
	},

	miner: () => {

		
		if(config.minage) {

			
			for (const miner of vars.minerStatus) {

				
				miner.value = parseInt($(`#${miner.name}-amount`).text());

				
				if ($(`#${miner.name}`).attr("style") === "opacity: 1;") {

					
					const isAdvancedMiner = (miner.name === "shop-quantum-server") ? true : false;

					
					if (miner.value >= config.maxMinerLevel && isAdvancedMiner === false) {
						continue;
					}

					
					$(`#${miner.name}`).click();
				}
			}
		}
	},

	upgrade: () => {

		
		if (!vars.fireWall[3].needUpgrade)
			return;

		
		const i = getRandomInt(0, 2);
		const index = vars.fireWall[i].index;

		
		if (!vars.fireWall[i].needUpgrade) {
			vars.loops.upgrade();
		}

		
		vars.balance = parseInt($("#window-my-coinamount").text());

		
		if ($("#window-firewall-pagebutton").is(":visible") === true) {
			$("#tutorial-firewall").css("display", "none");
			$("#window-firewall-pagebutton").click();
		}

		
		$(`#window-firewall-part${index}`).click();

		
		const stats = [
			parseInt($("#shop-max-charges").text()), parseInt($("#shop-strength").text()), parseInt($("#shop-regen").text())
		];
		const statLookup = [
			"max_charge10", "difficulty", "regen"
		];
		const maxStats = [
			30, 4, 10
		];
		let maxUpgradeCount = 0;

		
		for (const stat in maxStats) {

			
			if (stats[stat] < maxStats[stat]) {

				
				const statPrice = parseInt($(`#shop-firewall-${statLookup[stat]}-value`).text());
				if (statPrice < (vars.balance * config.maxUpgradeCost)) {

					
					log(`${vars.fireWall[i].name} - Amélioration : ${$(".window-shop-element-info b").eq(stat).text()}`);
					$(`#shop-firewall-${statLookup[stat]}`).click();
				}

			
			} else {
				maxUpgradeCount++;

				
				if (maxUpgradeCount === 3) {
					vars.fireWall[i].needUpgrade = false;
					if (vars.fireWall.every(checkFirewallsUpgrades))
						vars.fireWall[3].needUpgrade = false;
				}
			}
		}

		
		if ($("#window-firewall-pagebutton").is(":visible") === true) {
			$("#window-firewall-pagebutton").click();
		}
	},
};

gui = {

	
	show: () => {
		const sizeCSSBot = `height: ${config.guiBot.height}; width: ${config.guiBot.width}; text-align: center;`;
		const sizeCSSWhitelist = `height: ${config.guiWhitelist.height}; width: ${config.guiWhitelist.width}; text-align: center;`;

		const labelMap = {
			word: "Vitesse des mots",
			mine: "Amélioration des mines",
			upgrade: "Amélioration du firewall",
			hack: "Temps entre les hacks"
		};

		const freqInput = (type) => {
			return `<span style="font-size:15px">
				${labelMap[type]}:
				<input type="text" class="bot-gui-freq input-form" style="width:50px;margin:0px 0px 15px 5px;background:#444;"
				  value="${config.freq[type]}" data-type="${type}">
				<span>(ms)</span><br>
			</span>`;
		};

		
		const botWindowHTML = `
		<div id="bot-gui" class="window" style="border-color: rgb(62, 76, 95); color: rgb(191, 207, 210); ${sizeCSSBot} z-index: 10; top: 10%; right: 7%;">
			<div id="bot-gui-bot-title" class="window-title" style="background-color: rgb(62, 76, 95);">
				🤖 BOT AsCo_MATIX
				<span class="window-close-style">
					<img class="window-close-img" src="http://s0urce.io/client/img/icon-close.png">
				</span>
			</div>
			<div class="window-content" style="${sizeCSSBot}">
				<div id="bot-restart-button" class="button" style="display: block; margin-bottom: 15px">
					Redémarrer le bot
				</div>
				<div id="bot-stop-button" class="button" style="display: block; margin-bottom: 15px">
					Arrêter le bot
				</div>

				<div style="width:100%;border-bottom: 1px solid grey"></div>
				<h3 style="text-align:center;">ATTAQUES</h3>
				<div id="bot-autoAttack-button" class="button" style="display: block; margin-bottom: 15px">
					Attaques automatiques sur la cible
				</div>
				<div id="bot-autoTarget-button" class="button" style="display: block; margin-bottom: 15px">
					Cibles aléatoires
				</div>
				<div style="display:flex;justify-content:space-around;align-items:center;">
					<h4 style="text-align:center;">Port :</h4>
					<div id="port-random-button" class="button" style="display: block">
						Aléatoire
					</div>
					<div id="port-A-button" class="button" style="display: block">
						A
					</div>
					<div id="port-B-button" class="button" style="display: block">
						B
					</div>
					<div id="port-C-button" class="button" style="display: block">
						C
					</div>
				</div>
				<div style="width:100%;border-bottom: 1px solid grey;"></div>

				<div id="bot-firewall-button" class="button" style="display: block; margin-bottom: 15px; margin-top: 15px">
					Améliorer le firewall
				</div>
				<div id="bot-mineur-button" class="button" style="display: block; margin-bottom: 15px">
					Améliorer les mineurs
				</div>
				<div id="bot-log-button" class="button" style="display: block; margin-bottom: 15px">
					Afficher les logs en console
				</div><br>
				<span style="margin-bottom: 0.2em;">Message de hack:</span>
				<br>
				<input type="text" class="bot-gui-msg input-form" maxlength="40" style="width:350px;height:30px;background:lightgrey;color:black;margin-top:0.3em" value="${config.message}" >
				<br><br>
				${freqInput("word")}
				${freqInput("mine")}
				${freqInput("upgrade")}
				${freqInput("hack")}
			</div>
		</div>`;

		
		const whitelistWindowHTML = `
		<div id="whitelist-gui" class="window" style="border-color: rgb(62, 76, 95); color: rgb(191, 207, 210); ${sizeCSSWhitelist} z-index: 10; top: 10%; right: 7%;">
			<div id="whitelist-gui-whitelist-title" class="window-title" style="background-color: rgb(62, 76, 95);">
				📝 Whitelist
				<span class="window-close-style">
					<img class="window-close-img" src="http://s0urce.io/client/img/icon-close.png">
				</span>
			</div>
			<div class="window-content" style="${sizeCSSWhitelist}">
				<div style="display: flex; align-items: center; margin-bottom: 0.5em;">
		      <input type="text" id="inputWhitelist" class="input-form" maxlength="12" style="width:100%;height:30px;background:lightgrey;color:black;margin:0" placeholder="Entrez un pseudo">
		      <button id="btAddWhitelist" class="button" type="button" style="height:30px;margin-left:0.4em;">Ajouter</button>
		    </div>
				<div id="listePseudosWhitelist" style="display:flex; flex-wrap: wrap;max-height:300px;overflow-y:auto;">
		    </div>
			</div>
		</div>`;

		
		const boutonBOT = `
		<div class="desktop-element" id="desktop-bot" style="position: absolute; top: 85px; right: 0">
			<div style="font-size: 2em;">🤖</div>
			<div class="desktop-element-title">BOT</div>
		</div>
		`;

		
		const boutonWhitelist = `
		<div class="desktop-element" id="desktop-whitelist" style="position: absolute; top: 170px; right: 0">
			<div style="font-size: 2em;">📝</div>
			<div class="desktop-element-title">Whitelist</div>
		</div>
		`;

		
		const boutonCrash = `
		<div class="desktop-element" id="desktop-crash" style="position: absolute; top: 255px; right: 0">
			<div style="font-size: 2em;">👾</div>
			<div class="desktop-element-title">???</div>
		</div>
		`;

		
		const limitesMineurs = `
		<div style="text-align:center;">
			<span>MAX mineurs de base : </span>
			<input type="text" id="limitSmallMiner" class="input-form" style="width:40px;margin:15px 0px 15px 5px;background:#444"
			  value="${config.maxMinerLevel}" >
		</div>
		`;

		
		$(".window-wrapper").append(botWindowHTML);
		$(".window-wrapper").append(whitelistWindowHTML);

		
		$("#whitelist-gui").hide();

		
		$("#desktop-wrapper").append(boutonBOT);
		$("#desktop-bot").on("click", () => {
			$("#bot-gui").show();
		});

		
		$("#desktop-wrapper").append(boutonWhitelist);
		$("#desktop-whitelist").on("click", () => {
			$("#whitelist-gui").show();
		});

		
		$("#desktop-wrapper").append(boutonCrash);
		$("#desktop-crash").on("click", () => {
			document.body.innerHTML = '<div style="position:absolute;top:0;left:0;height:100vh;width:100%;'+
			  'background-image:url(http://i.imgur.com/pQT0l.gif);background-repeat:no-repeat;background-size:cover;">'+
			'</div>';
			for(i=0; i < 50; i++){ $("body").fadeIn(20).delay(50).fadeOut(10);}
			setTimeout(function() {
				window.location.reload();
			}, 3000);
		});

		
		$("#bot-gui-bot-title > span.window-close-style").on("click", () => {
			$("#bot-gui").hide();
		});

		
		$("#whitelist-gui-whitelist-title > span.window-close-style").on("click", () => {
			$("#whitelist-gui").hide();
		});

		
		$("#window-msg2 .message").html('<h1>🤖 BOT AsCo_MATIX - Version '+ config.version +'</h1>');

		
		$("#window-miner .window-content").css("height", "455px");
		$("#window-miner .window-content").append(limitesMineurs);

		
		$("#bot-autoTarget-button").css("color", config.autoTarget ? "green" : "red");
		$("#bot-autoAttack-button").css("color", config.autoAttack ? "green" : "red");
		$("#bot-firewall-button").css("color", vars.fireWall[3].needUpgrade ? "green" : "red");
		$("#bot-mineur-button").css("color", config.minage ? "green" : "red");
		$("#bot-log-button").css("color", config.log ? "green" : "red");
		$("#port-random-button").css("color", config.portToAttack ? "red" : "green");

		
		$("#port-A-button").css("color", "red");
		$("#port-B-button").css("color", "red");
		$("#port-C-button").css("color", "red");

		
		$(".bot-gui-msg").on("keypress", (e) => {
			if (e.keyCode !== 13) {
				return;
			}
			config.message = $(e.target).val();
			log(`Message de hack défini à : ${config.message}`);
			changementEffectue();
		});

		
		$("#bot-restart-button").on("click", () => {
			app.restart();
		});

		
		$("#bot-stop-button").on("click", () => {
			app.stop();
		});

		
		$("#bot-autoAttack-button").on("click", () => {
			config.autoAttack = !config.autoAttack;

			if(config.autoTarget == true) {
				config.autoTarget = false;
			}

			$("#bot-autoAttack-button").css("color", config.autoAttack ? "green" : "red");
			$("#bot-autoTarget-button").css("color", config.autoTarget ? "green" : "red");
		});

		
		$("#bot-autoTarget-button").on("click", () => {
			config.autoTarget = !config.autoTarget;
			$("#bot-autoTarget-button").css("color", config.autoTarget ? "green" : "red");
		});

		
		$("#port-random-button").on("click", () => {
			config.portToAttack = 0;
			resetPorts();
			$("#port-random-button").css("color", "green");
		});

		
		$("#port-A-button").on("click", () => {
			config.portToAttack = 1;
			resetPorts();
			$("#port-A-button").css("color", "green");
		});

		
		$("#port-B-button").on("click", () => {
			config.portToAttack = 2;
			resetPorts();
			$("#port-B-button").css("color", "green");
		});

		
		$("#port-C-button").on("click", () => {
			config.portToAttack = 3;
			resetPorts();
			$("#port-C-button").css("color", "green");
		});

		
		$("#bot-firewall-button").on("click", () => {
			vars.fireWall[3].needUpgrade = !vars.fireWall[3].needUpgrade;
			$("#bot-firewall-button").css("color", vars.fireWall[3].needUpgrade ? "green" : "red");
		});

		
		$("#bot-mineur-button").on("click", () => {
			config.minage = !config.minage;
			$("#bot-mineur-button").css("color", config.minage ? "green" : "red");
		});

		
		$("#bot-log-button").on("click", () => {
			config.log = !config.log;
			$("#bot-log-button").css("color", config.log ? "green" : "red");
		});

		
		$("#btAddWhitelist").on('click', () => {
			var pseudo = $("#inputWhitelist").val();

			
			pseudo = pseudo.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;");

			if($.inArray(pseudo, vars.listePseudos) == -1) {
				vars.listePseudos.push(pseudo);
				log(`Ajout à la whitelist du pseudo : ${pseudo}`);
				majWhitelist();
			} else {
				alert('Ce pseudo est déjà dans la whitelist !');
			}
			$("#inputWhitelist").val("");
		});

		
		$(".bot-gui-freq").on("keypress", (e) => {
			if (e.keyCode !== 13) {
				return;
			}

			
			const type = $(e.target).attr("data-type");
			if (!config.freq[type]) {
				return;
			}

			
			config.freq[type] = $(e.target).val();
			log(`Fréquence de '${type}' définie à ${config.freq[type]}`);
			changementEffectue();
		});

		
		$("#limitSmallMiner").on("keypress", (e) => {
			if (e.keyCode !== 13) {
				return;
			}
			config.maxMinerLevel = $(e.target).val();
			log(`Limite des petits mineurs : ${config.maxMinerLevel}`);
			changementEffectue();
		});

		
		$("#inputWhitelist").on("keypress", (e) => {
			if (e.keyCode !== 13) {
				return;
			}
			$("#btAddWhitelist").click();
		});

		
		const botWindow = ("#bot-gui");
		const botWindowTitle = ("#bot-gui-bot-title");
		$(document).on("mousedown", botWindowTitle, (e) => {
			vars.guiBot.dragReady = true;
			vars.guiBot.dragOffset.x = e.pageX - $(botWindow).position().left;
			vars.guiBot.dragOffset.y = e.pageY - $(botWindow).position().top;
		});
		$(document).on("mouseup", botWindowTitle, () => {
			vars.guiBot.dragReady = false;
		});
		$(document).on("mousemove", (e) => {
			if (vars.guiBot.dragReady) {
				$(botWindow).css("top", `${e.pageY - vars.guiBot.dragOffset.y}px`);
				$(botWindow).css("left", `${e.pageX - vars.guiBot.dragOffset.x}px`);
			}
		});

		
		const whitelistWindow = ("#whitelist-gui");
		const whitelistWindowTitle = ("#whitelist-gui-whitelist-title");
		$(document).on("mousedown", whitelistWindowTitle, (e) => {
			vars.guiWhitelist.dragReady = true;
			vars.guiWhitelist.dragOffset.x = e.pageX - $(whitelistWindow).position().left;
			vars.guiWhitelist.dragOffset.y = e.pageY - $(whitelistWindow).position().top;
		});
		$(document).on("mouseup", whitelistWindowTitle, () => {
			vars.guiWhitelist.dragReady = false;
		});
		$(document).on("mousemove", (e) => {
			if (vars.guiWhitelist.dragReady) {
				$(whitelistWindow).css("top", `${e.pageY - vars.guiWhitelist.dragOffset.y}px`);
				$(whitelistWindow).css("left", `${e.pageX - vars.guiWhitelist.dragOffset.x}px`);
			}
		});
	}
};


function checkFirewallsUpgrades(FW, index) {
	if (index === 3) {
		return true;
	}
	return FW.needUpgrade === false;
}


function parseHackProgress(progress) {
	const newProgress = progress.slice(0, -2);
	const newProgressParts = newProgress.split("width: ");
	return parseInt(newProgressParts.pop());
}


function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


function toDataURL(url) {
	return fetch(url)
		.then(response => response.blob())
		.then(blob => new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onloadend = () => resolve(reader.result);
			reader.onerror = reject;
			reader.readAsDataURL(blob);
		}));
}


function getHashCode(data) {
	let hash = 0;
	if (data.length === 0) {
		return hash;
	}
	for (let i = 0; i < data.length; i++) {
		const c = data.charCodeAt(i);
		hash = ((hash << 5) - hash) + c;
		hash &= hash;
	}
	return hash.toString();
}


function isFromEdit(e) {
	if (window.event) e = window.event;
	var target = e.target ? e.target : e.srcElement;
	return ((target.tagName=="INPUT" && (target.type == "text" || target.type == "password")) || target.tagName=="TEXTAREA");
}


function blocBadTouche(e) {
	if (window.event) e = window.event;
	var touche = window.event ? e.keyCode : e.which;
	var target = e.target ? e.target : e.srcElement;
	if (touche == 8 && !isFromEdit(e)) {
		if (e.keyCode) e.keyCode=0;
		return false;
	}
	return true;
}


function log(message) {
	if(config.log) {
		console.log(`:: ${message}`);
	}
}


function changementEffectue() {
	$("#bot-gui").css("transition", "all ease-in-out 0.3s");
	$("#bot-gui").css("box-shadow", "0px 0px 20px green");

	setTimeout(function() {
		$("#bot-gui").css("box-shadow", "0px 0px 0px green");
		setTimeout(function () {
			$("#bot-gui").css("transition", "none");
		}, 500);
	}, 500);
}


function resetPorts() {
	$("#port-random-button").css("color", "red");
	$("#port-A-button").css("color", "red");
	$("#port-B-button").css("color", "red");
	$("#port-C-button").css("color", "red");
}


function majWhitelist() {
	$("#listePseudosWhitelist").empty();

	$.each(vars.listePseudos, function(index, pseudo) {
		$("#listePseudosWhitelist").append(`
			<div class="pseudoWhitelist" style="display:flex;cursor:pointer;background-color:#2C2D32;border:1px solid white;margin:0.5em;border-radius:5px;padding:0.3em;color:white;">
				<span class="window-close-style window-close"><img src="../client/img/icon-close.png" class="window-close-img"></span>
				<div style="margin-left:0.3em;">${pseudo}</div>
			</div>
		`);
	});

	
	$(".pseudoWhitelist").on('click', function() {
		var pseudo = $(this).children()[1].innerHTML;
		supprimerWhitelist(pseudo);
	});
}


function supprimerWhitelist(pseudo) {
	var nbPos = $.inArray(pseudo, vars.listePseudos);
	delete vars.listePseudos[nbPos];
	log(`Suppression dans la whitelist du pseudo : ${pseudo}`);
	vars.listePseudos = nettoyerTab(vars.listePseudos);
	majWhitelist();
}


function nettoyerTab(test_array) {
    var index = -1,
        arr_length = test_array ? test_array.length : 0,
        resIndex = -1,
        result = [];
    while (++index < arr_length) {
        var value = test_array[index];
        if (value) { result[++resIndex] = value; }
    }
    return result;
}


$("body").on("keydown", function(event) {
	return blocBadTouche(event);
});


console.clear();
app.start();
