public class Solution
{
    public string MergeAlternately(string word1, string word2)
    {
        char[] s1 = word1.ToCharArray();
        char[] s2 = word2.ToCharArray();

        List<char> r = new List<char>();

        for (int i = 0; i < s1.Length + s2.Length; i++)
        {
            if (i < s1.Length) r.Add(s1[i]);
            if (i < s2.Length) r.Add(s2[i]);
        }

        return new string(r.ToArray());
    }
}