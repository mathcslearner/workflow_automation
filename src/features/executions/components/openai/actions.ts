"use server";

import { openAiChannel } from "@/inngest/channels/openai";
import { inngest } from "@/inngest/client";
import { Realtime, getSubscriptionToken } from "@inngest/realtime";

export type OpenAiToken = Realtime.Token<
    typeof openAiChannel,
    ["status"]
>;

export async function fetchGeminiRealtimeToken(): Promise<OpenAiToken> {
    const token = await getSubscriptionToken(inngest, {
        channel: openAiChannel(),
        topics: ["status"]  as ["status"]
    });

    return token;
}