public class Solution {
    public int ScoreOfString(string s) {
        int score = 0;
        byte[] asciiBytes = Encoding.ASCII.GetBytes(s);
        for(int i = 0; i < s.Length - 1; i++){
            
            
            score += Math.Abs(asciiBytes[i] - asciiBytes[i+1]);
     
        }
        return score;
    }
}