

//Euclid's algorithm

//compute the greatest common divisor of two nonnegative integers p and q as follows:
//if q if 0, the answer is p. If not, divide p by q and take the remainder r. The answer is the greatest common divisor of q and r.

public static int gcd(int p, int q) {
    if (q == 0) return p;
    int r = p % q;
    return gcd(q, r);
}

// union command - connect two objects
//quick find
    //is too slow
    //is too expensive. It take N squared array accesses to process a sequence of N union commans on N objects. 
    //Quick-find takes more than 10 raised to the power of 18 operations
    //+30 years of computer time
//p and q are connected if they have the same id

//defect
  //is too expensive (N array accesses)
    //trees are flat, but too expensive to keep them flat

public class QuickFindUF
{
    //integer array
    private int[] id;
// integer array of length N
    public QuickFindUF(int N) 
    {
        id = new int[N];
        for (int i = 0; i < N; i++)
            id[i] = i;
    }

    public boolean connected(int p, int q)
    { return id[p] ==id[q]; }

    public void union(int p, int q)
    {
        int pid = id[p];
        int qid = id[q];
        //change all entries with id[p] to id[q]
        for (int i = 0; i < id.length; i++)
            if (id[i] == pid) id[i] = qid;
    }
}

//quick-union

    //integer array id[] of length N
    //id[i] is parent of i
    //root of i is id[id[id[...id[i]...]]]

    //is also too slow
  
    //trees can get too tall
    //find too expensive (could be N array accesses)

public class QuickUnionUF
{
    private int[] id;

    public QuickUnionUF(int N)
    {
        id = new int[N];
        for (int i = 0; i < N; i++) id[i] = i;
    }

    private int root(int i)
    {
        while (i != id[i]) i = id[i];
        return i;
    }

    public boolean connected(int p, int q)
    {
        return root(p) == root(q);
    }

    public void union(int p, int q)
    //change root of p to point to root of q (depth of p and q array accesses)
    {
        int i = root(p);
        int j= root(q);
        id[i] = j;
    }
}

