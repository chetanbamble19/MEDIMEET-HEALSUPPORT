import { NextResponse } from "next/server";

// Example using Supabase - import your supabase client here
// import { supabase } from "@/lib/supabaseClient";

export async function POST(request) {
  try {
    const { rating, feedback } = await request.json();

    // TODO: Save to your DB here. For example, with supabase:
    // const { data, error } = await supabase
    //   .from("feedback")
    //   .insert([{ rating, feedback, created_at: new Date() }]);

    // if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    // Simulate saving for demo
    console.log("Feedback received:", { rating, feedback });

    return NextResponse.json({ message: "Feedback saved successfully" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
