/** @noSelfInFile */

declare namespace WoWAPI {
  type UnitIdArena = 'arena1' | 'arena2' | 'arena3' | 'arena4' | 'arena5';
  type UnitIdRaidPlayer =
    | 'raid1'
    | 'raid2'
    | 'raid3'
    | 'raid4'
    | 'raid5'
    | 'raid6'
    | 'raid7'
    | 'raid8'
    | 'raid9'
    | 'raid10'
    | 'raid11'
    | 'raid12'
    | 'raid13'
    | 'raid14'
    | 'raid15'
    | 'raid16'
    | 'raid17'
    | 'raid18'
    | 'raid19'
    | 'raid20'
    | 'raid21'
    | 'raid22'
    | 'raid23'
    | 'raid24'
    | 'raid25'
    | 'raid26'
    | 'raid27'
    | 'raid28'
    | 'raid29'
    | 'raid30'
    | 'raid31'
    | 'raid32'
    | 'raid33'
    | 'raid34'
    | 'raid35'
    | 'raid36'
    | 'raid37'
    | 'raid38'
    | 'raid39'
    | 'raid40';
  type UnitIdRaidPlayerPet =
    | 'raidpet1'
    | 'raidpet2'
    | 'raidpet3'
    | 'raidpet4'
    | 'raidpet5'
    | 'raidpet6'
    | 'raidpet7'
    | 'raidpet8'
    | 'raidpet9'
    | 'raidpet10'
    | 'raidpet11'
    | 'raidpet12'
    | 'raidpet13'
    | 'raidpet14'
    | 'raidpet15'
    | 'raidpet16'
    | 'raidpet17'
    | 'raidpet18'
    | 'raidpet19'
    | 'raidpet20'
    | 'raidpet21'
    | 'raidpet22'
    | 'raidpet23'
    | 'raidpet24'
    | 'raidpet25'
    | 'raidpet26'
    | 'raidpet27'
    | 'raidpet28'
    | 'raidpet29'
    | 'raidpet30'
    | 'raidpet31'
    | 'raidpet32'
    | 'raidpet33'
    | 'raidpet34'
    | 'raidpet35'
    | 'raidpet36'
    | 'raidpet37'
    | 'raidpet38'
    | 'raidpet39'
    | 'raidpet40';
  type UnitIdParty = 'party1' | 'party2' | 'party3' | 'party4';
  type UnitIdPartyPet = 'partypet1' | 'partypet2' | 'partypet3' | 'partypet4';
  type UnitIdOther =
    | 'player'
    | 'pet'
    | 'focus'
    | 'mouseover'
    | 'vehicle'
    | 'target'
    | 'none'
    | 'npc'
    | 'targettarget';
  type UnitId =
    | UnitIdOther
    | UnitIdArena
    | UnitIdRaidPlayer
    | UnitIdRaidPlayerPet
    | UnitIdParty
    | UnitIdPartyPet;

  type UnitRoleType = 'TANK' | 'DAMAGER' | 'HEALER';

  type Guid = string;
}

/**
 * Returns the GUID of the specified unit
 * @param unitId unit to look up the GUID of
 * @see https://wow.gamepedia.com/API_UnitGUID
 * @since 2.4.0
 */
declare function UnitGUID(unitId: WoWAPI.UnitId): WoWAPI.Guid;

/**
 * Returns basic information about another player from their GUID
 * @param unitGUID The GUID of the player you're querying about
 * @see https://wow.gamepedia.com/API_GetPlayerInfoByGUID
 * @since 3.2.0
 * @tupleReturn
 */
declare function GetPlayerInfoByGUID(
  unitGUID: WoWAPI.Guid
): [string, number, string, number, number, string, string];

/**
 * Returns the name and realm of the specified unit
 * @param unitId The UnitId to query (e.g. "player", "party2", "pet", "target" etc.)
 * @see https://wow.gamepedia.com/API_GetUnitName
 */
declare function GetUnitName(
  unitId: WoWAPI.UnitId,
  showServerName: boolean
): string;

/**
 * Determines if the unit exists
 * @param unitId The unit to query (e.g. "player", "party2", "pet", "target" etc.)
 * @see https://wow.gamepedia.com/API_UnitExists
 */
declare function UnitExists(unitId: WoWAPI.UnitId): 1 | null;

/**
 * Checks if a specified unit is a player
 * @param unitId UnitId of the unit to check.
 * @see https://wow.gamepedia.com/API_UnitIsPlayer
 */
declare function UnitIsPlayer(unitId: WoWAPI.UnitId): boolean;

/**
 * Returns the unit's level
 * @param unitId The unitId to get information from. (e.g. "player", "target")
 * @return The unit level. Returns -1 for bosses, or players more than 10 levels above the player
 * @see https://wow.gamepedia.com/API_UnitEffectiveLevel
 */
declare function UnitLevel(unitId: WoWAPI.UnitId): number;

/**
 * Get the name of the faction (Horde/Alliance) a unit belongs to
 * @param unitId unit you want to get the faction for
 * @see https://wow.gamepedia.com/API_UnitFactionGroup
 * @tupleReturn
 */
declare function UnitFactionGroup(unitId: WoWAPI.UnitId): [string, string];

/**
 * Returns the class of the specified unit
 * @param unitId unit to query, e.g. "player"
 * @see https://wow.gamepedia.com/API_UnitClass
 * @tupleReturn
 */
declare function UnitClass(unitId: WoWAPI.UnitId): [string, string, number];

/**
 * Returns the current health of the specified unit
 * @param unitId identifies the unit to query health for
 * @see https://wow.gamepedia.com/API_UnitHealth
 */
declare function UnitHealth(unitId: WoWAPI.UnitId): number;

/**
 * Returns the maximum health of the specified unit
 * @param unitId the unit whose max health to query
 * @see https://wow.gamepedia.com/API_UnitHealthMax
 */
declare function UnitHealthMax(unitId: WoWAPI.UnitId): number;

/**
 * Returns 1 if the unit is a player in your party, nil otherwise
 * @param unitId unitId who should be checked
 * @see https://wow.gamepedia.com/API_UnitInParty
 */
declare function UnitInParty(unitId: WoWAPI.UnitId): boolean;

/** @noSelfInFile **/

/**
 * True if the unit is in combat
 *
 * {@link https://wowpedia.fandom.com/wiki/API_UnitAffectingCombat}
 *
 * @param unitId The unit's Identifier to be queried
 */
declare function UnitAffectingCombat(unitId: IUnitId): boolean;

/**
 * Indicates a mob is no longer eligible for tap
 *
 * {@link https://wowpedia.fandom.com/wiki/API_UnitIsTapDenied}
 *
 * @param unitId The unit's Identifier to be queried
 */
declare function UnitIsTapDenied(unitId: IUnitId): boolean;

declare const enum CreatureType {
  beast = 'Beast',
  dragonkin = 'Dragonkin',
  demon = 'Demon',
  elemental = 'Elemental',
  giant = 'Giant',
  undead = 'Undead',
  humanoid = 'Humanoid',
  critter = 'Critter',
  mechanical = 'Mechanical',
  notSpecified = 'Not specified',
  totem = 'Totem',
  nonCombatPet = 'Non-combat Pet',
  gasCloud = 'Gas Cloud',
}

/**
 * Returns the creature classification type of the unit
 *
 * {@link https://wowpedia.fandom.com/wiki/API_UnitCreatureType}
 *
 * @param unitId The unit's Identifier to be queried
 */
declare function UnitCreatureType(unitId: IUnitId): CreatureType;

/**
 * True if the specified units are the same unit
 *
 * {@link https://wowpedia.fandom.com/wiki/API_UnitIsUnit}
 */
declare function UnitIsUnit(
  firstUnitId: IUnitId,
  secondUnitId: IUnitId
): boolean;

declare const enum Classes2 {
  warrior = 'WARRIOR',
  paladin = 'PALADIN',
  hunter = 'HUNTER',
  rogue = 'ROGUE',
  priest = 'PRIEST',
  deathKnight = 'DEATHKNIGHT',
  shaman = 'SHAMAN',
  mage = 'MAGE',
  warlock = 'WARLOCK',
  monk = 'MONK',
  druid = 'DRUID',
  demonHunter = 'DEMONHUNTER',
  evoker = 'EVOKER',
}

declare const enum ClassesId {
  warrior = 1,
  paladin = 2,
  hunter = 3,
  rogue = 4,
  priest = 5,
  deathKnight = 6,
  shaman = 7,
  mage = 8,
  warlock = 9,
  monk = 10,
  druid = 11,
  demonHunter = 12,
  evoker = 13,
}

declare const enum Races2 {
  human = 'Human',
  orc = 'Orc',
  dwarf = 'Dwarf',
  nightElf = 'NightElf',
  undead = 'Scourge',
  tauren = 'Tauren',
  gnome = 'Gnome',
  troll = 'Troll',
  golbin = 'Goblin',
  bloodElf = 'BloodElf',
  draenei = 'Draenei',
  felOrc = 'FelOrc',
  naga = 'Naga',
  broken = 'Broken',
  skeleton = 'Skeleton',
  vrykul = 'Vrykul',
  tuskar = 'Tuskar',
  forestTroll = 'ForestTroll',
  taunka = 'Taunka',
  northrendSkeleton = 'NorthrendSkeleton',
  iceTroll = 'IceTroll',
  worgen = 'Worgen',
  gilnean = 'Gilnean',
  pandaren = 'Pandaren',
  nightborne = 'Nightborne',
  highmountainTauren = 'HighmountainTauren',
  voidElf = 'VoidElf',
  lightforgedDraenei = 'LightforgedDraenei',
  zandalariTroll = 'ZandalariTroll',
  kulTiran = 'KulTiran',
  thinHuman = 'ThinHuman',
  darkIronDwarf = 'DarkIronDwarf',
  vulpera = 'Vulpera',
  magharOrc = 'MagharOrc',
  mechagnome = 'Mechagnome',
  dracthyr = 'Dracthyr',
}

/**
 * Returns the race of the unit
 *
 * {@link https://wowpedia.fandom.com/wiki/API_UnitRace}
 *
 * @param unitId The unit's Identifier to be queried
 *
 * @return 0 - raceName - Localized race name, suitable for use in user interfaces
 * @return 1 - raceFile - Localization-independent race name, suitable for use as table keys {@link Races2}
 * @return 2 - raceID - Localization-independent raceID
 */
declare function UnitRace(
  unitId: IUnitId
): LuaMultiReturn<[string, Races2, number]>;

/**
 * Returns the current spell haste percentage for a unit
 *
 * {@link https://wowpedia.fandom.com/wiki/API_UnitSpellHaste}
 *
 * @param unitId The unit's Identifier to be queried
 */
declare function UnitSpellHaste(unitId: IUnitId): number;

/**
 * Get current Power Regeneration
 *
 * @param unitId The unit's Identifier to be queried
 *
 * @return 0 - base
 * @return 1 - combat
 */
declare function GetPowerRegen(
  unitId: IUnitId
): LuaMultiReturn<[number, number]>;

declare const enum DispelType {
  Curse = 'Curse',
  Disease = 'Disease',
  Magic = 'Magic',
  Poison = 'Poison',
  Enrage = '',
}

/**
 * {@link https://wowpedia.fandom.com/wiki/API_UnitAura}
 *
 * @return 0 - name - The localized name of the aura, otherwise nil if there is no aura for the index
 * @return 1 - icon - The icon texture
 * @return 2 - count - The amount of stacks, otherwise 0
 * @return 3 - dispelType - The locale-independent magic type of the aura, otherwise nil
 * @return 4 - duration - The full duration of the aura in seconds
 * @return 5 - expirationTime - Time the aura expires compared to {@link GetTime()}
 * @return 6 - source - The unit that applied the aura
 * @return 7 - isStealable - If the aura may be stolen
 * @return 8 - nameplateShowPersonal - If the aura should be shown on the player/pet/vehicle nameplate
 * @return 9 - spellId - The spell ID of the aura
 * @return 10 - canApplyAura - If the player can apply the aura
 * @return 11 - isBossDebuff - If the aura was cast by a boss
 * @return 12 - castByPlayer - If the aura was applied by a player
 * @return 13 - nameplateShowAll - If the aura should be shown on nameplates
 * @return 14 - timeMod - The scaling factor used for displaying time left
 */
type Aura = [
  string,
  number,
  number,
  DispelType | undefined,
  number,
  number,
  IUnitId,
  boolean,
  boolean,
  number,
  boolean,
  boolean,
  boolean,
  boolean,
  number
];

/**
 * Returns the buffs/debuffs for the unit
 *
 * {@link https://wowpedia.fandom.com/wiki/API_UnitAura}
 *
 * @param unitId The unit's Identifier to be queried
 * @param index The index of the aura to be queried
 * @param filter A list of filters, separated by pipe chars or spaces. Otherwise defaults to "HELPFUL"
 *
 * @return 0 - name - The localized name of the aura, otherwise nil if there is no aura for the index
 * @return 1 - icon - The icon texture
 * @return 2 - count - The amount of stacks, otherwise 0
 * @return 3 - dispelType - The locale-independent magic type of the aura, otherwise nil
 * @return 4 - duration - The full duration of the aura in seconds
 * @return 5 - expirationTime - Time the aura expires compared to {@link GetTime()}
 * @return 6 - source - The unit that applied the aura
 * @return 7 - isStealable - If the aura may be stolen
 * @return 8 - nameplateShowPersonal - If the aura should be shown on the player/pet/vehicle nameplate
 * @return 9 - spellId - The spell ID of the aura
 * @return 10 - canApplyAura - If the player can apply the aura
 * @return 11 - isBossDebuff - If the aura was cast by a boss
 * @return 12 - castByPlayer - If the aura was applied by a player
 * @return 13 - nameplateShowAll - If the aura should be shown on nameplates
 * @return 14 - timeMod - The scaling factor used for displaying time left
 */
declare function UnitAura(
  unitId: IUnitId,
  index: number,
  filter?: string
): LuaMultiReturn<Aura>;

/**
 *
 * {@link https://wowpedia.fandom.com/wiki/API_UnitChannelInfo}
 *
 * @return 0 - name - The localized name of the aura, otherwise nil if there is no aura for the index
 * @return 1 - text - The name to be displayed
 * @return 2 - texture - The texture path associated with the spell icon
 * @return 3 - startTimeMS - Specifies when channeling began, in milliseconds (corresponds to {@link GetTime()}*1000)
 * @return 4 - endTimeMS - Specifies when channeling will end, in in milliseconds (corresponds to {@link GetTime()}*1000)
 * @return 5 - isTradeSkill - Specifies if the cast is a tradeskill
 * @return 6 - notInterruptible - If true, indicates that this channeling cannot be interrupted with abilities like kick (those spells have shield frame around their icons)
 * @return 7 - spellId - The spell's unique identifier
 */
type ChannelInfo = [
  string | undefined,
  string,
  string,
  number,
  number,
  boolean,
  boolean,
  number
];

/**
 * Returns information about the spell currently being channeled by the specified unit
 *
 * {@link https://wowpedia.fandom.com/wiki/API_UnitChannelInfo}
 *
 * @param unitId The unit's Identifier to be queried
 *
 * @return 0 - name - The localized name of the aura, otherwise nil if there is no aura for the index
 * @return 1 - text - The name to be displayed
 * @return 2 - texture - The texture path associated with the spell icon
 * @return 3 - startTimeMS - Specifies when channeling began, in milliseconds (corresponds to {@link GetTime()}*1000)
 * @return 4 - endTimeMS - Specifies when channeling will end, in in milliseconds (corresponds to {@link GetTime()}*1000)
 * @return 5 - isTradeSkill - Specifies if the cast is a tradeskill
 * @return 6 - notInterruptible - If true, indicates that this channeling cannot be interrupted with abilities like kick (those spells have shield frame around their icons)
 * @return 7 - spellId - The spell's unique identifier
 */
declare function UnitChannelInfo(unitId: IUnitId): LuaMultiReturn<ChannelInfo>;

declare const enum ThreatStatus {
  hasThreat = 0,
  highestTreat = 1,
  primaryTarget = 2,
  highestAndPrimary = 3,
}

/**
 * Returns detailed info for the threat status of one unit against another.
 *
 * {@link https://wowpedia.fandom.com/wiki/API_UnitDetailedThreatSituation}
 *
 * @param unitId The unit's Identifier to be queried
 *
 * @return 0 - isTanking - Returns true if the unit is the primary threat target of the mobUnit, returns false otherwise.
 * @return 1 - status - Threat status of the unit on the mobUnit.
 * @return 2 - scaledPercentage - The unit's threat percentage against mobUnit. At 100% the unit will become the primary target. This value is also scaled the closer the unit is to the mobUnit.
 * @return 3 - rawPercentage - The unit's threat percentage against mobUnit relative to the threat of mobUnit's primary target. Can be greater than 100, up to 255. Stops updating when you become the primary target.
 * @return 4 - threatValue - The unit's total threat value on the mobUnit.
 */
declare function UnitDetailedThreatSituation(
  this: void,
  unitId: IUnitId,
  otherUnit: IUnitId
): LuaMultiReturn<[boolean, ThreatStatus | undefined, number, number, number]>;

declare function UnitThreatSituation(
  unitId: IUnitId,
  otherUnit: IUnitId
): ThreatStatus | undefined;

declare function UnitPower(unitId: IUnitId, powerType: number): number;

declare const enum RaidTargetIcon {
  star = 1,
  circle = 2,
  diamond = 3,
  triangle = 4,
  moon = 5,
  square = 6,
  cross = 7,
  skull = 8,
}

declare function GetRaidTargetIndex(
  unitId: IUnitId
): RaidTargetIcon | undefined;
