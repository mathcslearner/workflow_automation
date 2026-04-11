"use server";

import { stripeTriggerChannel } from "@/inngest/channels/stripe-trigger";
import { inngest } from "@/inngest/client";
import { Realtime, getSubscriptionToken } from "@inngest/realtime";

export type StripeTriggerToken = Realtime.Token<
    typeof stripeTriggerChannel,
    ["status"]
>;

export async function fetchStripeTriggerRealtimeToken(): Promise<StripeTriggerToken> {
    const token = await getSubscriptionToken(inngest, {
        channel: stripeTriggerChannel(),
        topics: ["status"] as ["status"]
    });

    return token;
}