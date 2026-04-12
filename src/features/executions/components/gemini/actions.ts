"use server";

import { geminiChannel } from "@/inngest/channels/gemini";
import { inngest } from "@/inngest/client";
import { Realtime, getSubscriptionToken } from "@inngest/realtime";

export type GeminiToken = Realtime.Token<
    typeof geminiChannel,
    ["status"]
>;

export async function fetchAnthropicRealtimeToken(): Promise<GeminiToken> {
    const token = await getSubscriptionToken(inngest, {
        channel: geminiChannel(),
        topics: ["status"]  as ["status"]
    });

    return token;
}