

//Euclid's algorithm

//compute the greatest common divisor of two nonnegative integers p and q as follows:
//if q if 0, the answer is p. If not, divide p by q and take the remainder r. The answer is the greatest common divisor of q and r.

public static int gcd(int p, int q) {
    if (q == 0) return p;
    int r = p % q;
    return gcd(q, r);
}

//Dynamic connectivity 

// union command - connect two objects
//is there a path that connects them?

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
    ///add connection between p and q
    public void union(int p, int q)
    //change root of p to point to root of q (depth of p and q array accesses)
    {
        int i = root(p);
        int j= root(q);
        id[i] = j;
    }
}

//Improvement:
    //weighting
        //quick-union
            //modify quick-union to avoid tall trees
            //kepp track of size of each tree (number of obj)
            //balance by linking root of smaller tree to root of larger tree

            //Running time: find - takes time proportional to depth of p and q.
                            //union - takes constant time, given roots


    //path compression
        //just after computing the root of p, set the id of each examined node to point to that root. 
        private int root(int i)
        {
            while (i != id[i])
            {
                id[i] = id[id[i]];
                i = id[i];
            }
            return i;
        } 

        //keeps tree almost completely flat


    //Time complexity
    // quick-find     M N
    // quick-union    M N
    // weighted QU    N + M log N
    // QU + path compression N + M log N
    // weighted QU + path compression N + M lg* N


    //unon-find appliction:

    //percolation
    //least common ancestor



    // Q1 Social network connectivity
    
    //Given a social network containing n members and a log file containing m timestamps
    //at which times pairs of members formed friendships, design an algorithm to determine the
    //earliest time at which all members are connected (i.e. every member is a friend of a friend of a 
    //friend ... of a friend).
    //Assume that the log file is sorted by timestamp and that friendship is an equivalence relation.
    //The running time of your algo should be m log n or better and use extra space proportional to n. 

