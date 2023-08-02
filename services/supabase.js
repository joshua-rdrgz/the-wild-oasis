import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://ukgprisumpglvlbvowsi.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrZ3ByaXN1bXBnbHZsYnZvd3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk0MDg5MDcsImV4cCI6MjAwNDk4NDkwN30.Zo6yOegiG6pu4NhmGojOYZKYlpWDwsxQHkz9s6SUauI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
