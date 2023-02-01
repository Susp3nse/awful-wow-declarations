/* eslint-disable @typescript-eslint/no-explicit-any */
/** @noSelfInFile **/

type EncounterStart = LuaMultiReturn<[number, string, number, number]>;

type COMBAT_LOG_EVENT = [
  timestamp: string,
  subevent: string,
  hideCaster: string,
  sourceGUID: string,
  sourceName: string,
  sourceFlags: string,
  sourceRaidFlags: string,
  destGUID: string,
  destName: string,
  destFlags: string,
  destRaidFlags: string,
  critical: string
];
/**
 * Returns the current COMBAT_LOG_EVENT payload.
 * Returns a variable number of values: 11 base values and up to 13 extra values based upon the subtype of the event.
 *
 * {@link https://wowpedia.fandom.com/wiki/API_CombatLogGetCurrentEventInfo}
 */
declare function CombatLogGetCurrentEventInfo(): LuaMultiReturn<
  COMBAT_LOG_EVENT | any[]
>;

/**
 * Tracker for BG/Arena countdown timer for prep
 */
declare const TimerTrackerTimer1: { time: number } | undefined;
