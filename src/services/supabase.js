import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://yqdmosxribtvqiehssci.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxZG1vc3hyaWJ0dnFpZWhzc2NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMjI3OTAsImV4cCI6MjA2MTU5ODc5MH0.v27Yt-TxrgMuLtn0fMWlK1jOhQzXIneyeSHYQDxH7MY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
