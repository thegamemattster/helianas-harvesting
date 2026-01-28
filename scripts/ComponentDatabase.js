export class ComponentDatabase {
    _items = new Map();
    bosses = new Map();
    creatureTypes = [
        "Aberration",
        "Ancient One",
        "Beast",
        "Celestial",
        "Construct",
        "Dragon",
        "Elemental",
        "Fey",
        "Fiend",
        "Giant",
        "Humanoid",
        "Monstrosity",
        "Ooze",
        "Plant",
        "Undead"
    ];

    constructor() {
        this._injectAllItems();
    }

    _injectAllItems() {
        const allItems = [
            // Standard Aberrations
            { "creatureType": "Aberration", "name": "Aberration Antenna", "dc": 5, "id": "mThBpshzp6qS1MQi", "img": "icons/commodities/biological/antenna-blue.webp", "crafting": true, "edible": false },
            { "creatureType": "Aberration", "name": "Aberration Eye", "dc": 5, "id": "FFvArli2j1V6vQ17", "img": "icons/commodities/biological/eye-tentacle-grey-orange.webp", "crafting": true, "edible": true },
            { "creatureType": "Aberration", "name": "Aberration Flesh", "dc": 5, "id": "ocvVlUOFfBxY4JB6", "img": "icons/consumables/meat/ribs-glowing-purple.webp", "crafting": false, "edible": true },
            { "creatureType": "Aberration", "name": "Phial of Aberration Blood", "dc": 5, "id": "dbdH3VbRd1W2ucXF", "img": "icons/consumables/potions/vial-cork-empty.webp", "crafting": true, "edible": true },
            { "creatureType": "Aberration", "name": "Aberration Subeye", "dc": 5, "id": "WRVzZBddWzDpZBHG", "img": "icons/commodities/biological/eye-tentacle-grey-orange.webp", "crafting": true, "edible": true },
            { "creatureType": "Aberration", "name": "Aberration Bone", "dc": 10, "id": "d7A1YuHfTxhACcuj", "img": "icons/commodities/bones/horn-curved-grey-purple.webp", "crafting": true, "edible": true },
            { "creatureType": "Aberration", "name": "Aberration Egg", "dc": 10, "id": "76Q4NyFl6yWZec9W", "img": "icons/consumables/eggs/egg-cracked-purple.webp", "crafting": false, "edible": true },
            { "creatureType": "Aberration", "name": "Aberration Fat", "dc": 10, "id": "OiGzKrl04YHEirj1", "img": "icons/commodities/biological/pustules-red.webp", "crafting": true, "edible": true },
            { "creatureType": "Aberration", "name": "Pouch of Aberration Claws", "dc": 10, "id": "m3jlHanzX2WfPHwf", "img": "icons/containers/bags/sack-simple-leather-brown.webp", "crafting": false, "edible": false },
            { "creatureType": "Aberration", "name": "Pouch of Aberration Teeth", "dc": 10, "id": "j6Mki4wc36SNQjbv", "img": "icons/commodities/bones/teeth-sharp-white.webp", "crafting": true, "edible": false },
            { "creatureType": "Aberration", "name": "Aberration Tentacle", "dc": 10, "id": "pprQRQQTwn73lthK", "img": "icons/commodities/biological/tentacle-pink.webp", "crafting": true, "edible": true },
            { "creatureType": "Aberration", "name": "Aberration Heart", "dc": 15, "id": "VZR3zlnNU02IJ9ay", "img": "icons/commodities/biological/organ-heart-black.webp", "crafting": false, "edible": true },
            { "creatureType": "Aberration", "name": "Phial of Aberration Mucus", "dc": 15, "id": "PAdHyVXnuTux8hdb", "img": "icons/consumables/potions/bottle-corked-empty.webp", "crafting": true, "edible": false },
            { "creatureType": "Aberration", "name": "Aberration Liver", "dc": 15, "id": "ci0pfFfUuiLdtIWA", "img": "icons/commodities/biological/tongue-brown.webp", "crafting": false, "edible": true },
            { "creatureType": "Aberration", "name": "Aberration Stinger", "dc": 15, "id": "QzKRalulvHnZZggK", "img": "icons/creatures/claws/claw-curved-jagged-yellow.webp", "crafting": true, "edible": false },
            { "creatureType": "Aberration", "name": "Aberration Brain", "dc": 20, "id": "pnzfqU0ghGOwCnW7", "img": "icons/commodities/biological/organ-brain-red.webp", "crafting": true, "edible": true },
            { "creatureType": "Aberration", "name": "Aberration Chitin", "dc": 20, "id": "y1wwwjUM3OSUwKy1", "img": "icons/commodities/biological/shell-ridged-blue.webp", "crafting": true, "edible": false },
            { "creatureType": "Aberration", "name": "Aberration Hide", "dc": 20, "id": "NzaynVVgPInD2LZv", "img": "icons/commodities/leather/scale-chitin-grey.webp", "crafting": true, "edible": false },
            { "creatureType": "Aberration", "name": "Aberration Main Eye", "dc": 20, "id": "vnyhV87jkWP7Mrng", "img": "icons/commodities/biological/eye-tentacle-grey-orange.webp", "volatile": true, "crafting": true, "edible": false },
            
            // Standard Beasts
            { "creatureType": "Beast", "name": "Beast Antenna", "dc": 5, "id": "63kQK9z9A2NTVpP5", "img": "icons/commodities/biological/tail-rodent-orange.webp", "crafting": true, "edible": true },
            { "creatureType": "Beast", "name": "Beast Eye", "dc": 5, "id": "MlwNdpnQ6TvJSz70", "img": "icons/commodities/biological/eye-lizard-orange.webp", "crafting": true, "edible": true },
            { "creatureType": "Beast", "name": "Beast Flesh", "dc": 5, "id": "zUpxl9I6pmFg05gG", "img": "icons/consumables/meat/shank-aged-red.webp", "crafting": false, "edible": true },
            { "creatureType": "Beast", "name": "Phial of Beast Blood", "dc": 5, "id": "NVQmaBx4ZAamAfS4", "img": "icons/consumables/potions/potion-tube-corked-red.webp", "crafting": true, "edible": true },
            { "creatureType": "Beast", "name": "Beast Antler", "dc": 10, "id": "LaBhASbzqsAg9Hu6", "img": "icons/commodities/bones/horn-antler-tan.webp", "crafting": false, "edible": false },
            { "creatureType": "Beast", "name": "Beast Beak", "dc": 10, "id": "r4w30vZItZx4gH6Y", "img": "icons/commodities/bones/beak-hooked-red.webp", "crafting": true, "edible": false },
            { "creatureType": "Beast", "name": "Beast Bone", "dc": 10, "id": "cYW1f8CLLOvfAv4Z", "img": "icons/commodities/bones/bone-broken-grey.webp", "crafting": true, "edible": true },
            { "creatureType": "Beast", "name": "Beast Egg", "dc": 10, "id": "UJuGOWu6UsP3grtl", "img": "icons/consumables/eggs/egg-cracked-white.webp", "crafting": false, "edible": true },
            { "creatureType": "Beast", "name": "Beast Fat", "dc": 10, "id": "DuYjIFUhM5vTErTr", "img": "icons/commodities/biological/pustules-red.webp", "crafting": true, "edible": true },
            { "creatureType": "Beast", "name": "Beast Fin", "dc": 10, "id": "HbIkMc24LrD2F3zh", "img": "icons/commodities/biological/fin-red-green.webp", "crafting": true, "edible": false },
            { "creatureType": "Beast", "name": "Beast Horn", "dc": 10, "id": "kdo5X01G1MhDaGTm", "img": "icons/commodities/bones/horn-simple-white.webp", "crafting": true, "edible": false },
            { "creatureType": "Beast", "name": "Beast Pincer", "dc": 10, "id": "E59RTOLpVdPNEdgB", "img": "icons/creatures/abilities/mouth-teeth-fire-orange.webp", "crafting": false, "edible": false },
            { "creatureType": "Beast", "name": "Pouch of Beast Claws", "dc": 10, "id": "bCKpjpOXCQbIOfBF", "img": "icons/containers/bags/sack-simple-leather-brown.webp", "crafting": true, "edible": false },
            { "creatureType": "Beast", "name": "Pouch of Beast Teeth", "dc": 10, "id": "EmhhpOFAHtZEO3hb", "img": "icons/commodities/bones/teeth-sharp-white.webp", "crafting": true, "edible": false },
            { "creatureType": "Beast", "name": "Beast Talon", "dc": 10, "id": "Wn9S8Coy2R4Nms3r", "img": "icons/commodities/bones/horns-pointed-grey.webp", "crafting": false, "edible": false },
            { "creatureType": "Beast", "name": "Beast Tusk", "dc": 10, "id": "mmN2lB8E5UGBftu1", "img": "icons/commodities/bones/tooth-spiked-brown.webp", "crafting": true, "edible": false },
            { "creatureType": "Beast", "name": "Beast Heart", "dc": 15, "id": "0bibGJfScx8Kh2Wv", "img": "icons/commodities/biological/organ-heart-red.webp", "crafting": true, "edible": true },
            { "creatureType": "Beast", "name": "Beast Liver", "dc": 15, "id": "sd5FByV5Bb4XW8Pp", "img": "icons/commodities/biological/tongue-brown.webp", "crafting": false, "edible": true },
            { "creatureType": "Beast", "name": "Beast Poison Gland", "dc": 15, "id": "i8ypVXXity8JzNJF", "img": "icons/commodities/biological/tail-scaled-green.webp", "crafting": true, "edible": false },
            { "creatureType": "Beast", "name": "Pouch of Beast Feathers", "dc": 15, "id": "THaJlBXlAbQFHWGN", "img": "icons/containers/bags/coinpouch-simple-leather-silver-brown.webp", "crafting": true, "edible": false },
            { "creatureType": "Beast", "name": "Pouch of Beast Scales", "dc": 15, "id": "xjJZ37nt0OJCSNIp", "img": "icons/containers/bags/coinpouch-simple-leather-brown.webp", "crafting": true, "edible": false },
            { "creatureType": "Beast", "name": "Beast Stinger", "dc": 5, "id": "QFG2nvKjMeb3A9in", "img": "icons/creatures/claws/claw-curved-jagged-yellow.webp", "crafting": true, "edible": false },
            { "creatureType": "Beast", "name": "Beast Tentacle", "dc": 15, "id": "oDmycy52JK4p1b7K", "img": "icons/commodities/biological/tentacle-purple-white.webp", "crafting": true, "edible": false },
            { "creatureType": "Beast", "name": "Beast Chitin", "dc": 20, "id": "sGIgCEeorbjaVVIr", "img": "icons/commodities/biological/shell-tan.webp", "crafting": true, "edible": false },
            { "creatureType": "Beast", "name": "Beast Pelt", "dc": 20, "id": "IohBB5Av8ku7lcaS", "img": "icons/commodities/leather/fur-brown-gold.webp", "crafting": true, "edible": false },

            // CUSTOM: Ancient Ones
            { "creatureType": "Ancient One", "name": "Ancient One Eye", "dc": 5, "id": "xtQ4HSf0Qr74D6JQ", "img": "icons/commodities/biological/eye-lizard-green.webp", "crafting": true, "edible": true },
            { "creatureType": "Ancient One", "name": "Ancient One Flesh", "dc": 5, "id": "qeHtqGfsQ3SzDvsg", "img": "icons/consumables/meat/fillet-fish-pink-teal.webp", "crafting": false, "edible": true },
            { "creatureType": "Ancient One", "name": "Phial of Ancient Blood", "dc": 5, "id": "Z0x2qTyYa5MPvB1T", "img": "icons/consumables/potions/potion-flask-corked-tied-necklace-teal.webp", "crafting": true, "edible": true },
            { "creatureType": "Ancient One", "name": "Ancient One Bone", "dc": 10, "id": "WB5aSJn2x9RVwdiD", "img": "icons/commodities/bones/bone-fragments-grey.webp", "crafting": true, "edible": true },
            { "creatureType": "Ancient One", "name": "Ancient One Heart", "dc": 15, "id": "eeWS9TY3TfJpZSHO", "img": "icons/commodities/biological/organ-heart-pink.webp", "crafting": false, "edible": true },
            { "creatureType": "Ancient One", "name": "Ancient One Brain", "dc": 20, "id": "H057o3P3KBsu3MwH", "img": "icons/commodities/biological/organ-brain-red.webp", "crafting": true, "edible": true },
            { "creatureType": "Ancient One", "name": "Fragment of Aether", "dc": 25, "id": "7Z8QxriRKjB4awDn", "img": "icons/magic/light/explosion-star-glow-blue-purple.webp", "volatile": true, "crafting": true, "edible": false }
        ];

        allItems.forEach(item => this.addItem(item));
    }

    addItem(input) {
        const item = this.#sanitizeItem(input);
        this._items.set(item.id, item);

        if (item.bossDrop) {
            const bossList = this.bosses.get(item.creatureType) ?? new Set();
            item.bosses.forEach(boss => bossList.add(boss));
            this.bosses.set(item.creatureType, bossList);
        }
    }

    #sanitizeItem(input) {
        if (!(/^[a-zA-Z0-9]{16}$/.test(input.id))) {
            console.error("Heliana's Harvesting | Invalid Item ID for ", input.name);
            throw new Error("Heliana's Harvesting | Invalid Item ID");
        }

        const item = { id: input.id };
        item.crafting = input.crafting === true;
        item.edible = input.edible === true;
        item.volatile = input.volatile === true;

        if (typeof input.bosses === "string") input.bosses = [input.bosses];
        item.bosses = Array.isArray(input.bosses) ? input.bosses : [];
        item.bossDrop = item.bosses.length > 0;

        item.dc = typeof input.dc === "number" ? input.dc : 5;
        item.name = typeof input.name === "string" ? input.name : "Unnamed Item";
        item.img = typeof input.img === "string" ? input.img : "icons/svg/item-bag.svg";
        item.source = typeof input.source === "string" ? input.source : "";
        item.creatureType = this.creatureTypes.includes(input.creatureType) ? input.creatureType : "All";

        item.crMin = typeof input.crMin === "number" ? input.crMin : 0;
        item.crMax = typeof input.crMax === "number" ? input.crMax : 40;
        item.value = typeof input.value === "number" ? input.value : item.dc * 4;
        item.rarity = typeof input.rarity === "string" ? input.rarity : "common";

        return item;
    }

    get items() { return Array.from(this._items.values()); }
    hasBoss(creatureType) { return this.bosses.has(creatureType); }
    getBossNames(creatureType) {
        const ct = this.bosses.get(creatureType);
        return ct ? Array.from(ct).sort() : [];
    }
    get(itemId) { return this._items.get(itemId); }

    createItem5e(creatureName, item) {
        return {
            "name": `${item.name} (${creatureName})`,
            "type": "loot",
            "img": item.img,
            "system": {
                "rarity": item.rarity,
                "description": { "value": `<p>A ${item.name.toLowerCase()} harvested from a ${creatureName}.</p>` },
                "quantity": item.count,
                "price": { "value": item.value, "denomination": "gp" },
                "identified": true
            },
            "flags": { "helianas-harvesting": { "id": item.id, "source": creatureName } }
        };
    }
}
