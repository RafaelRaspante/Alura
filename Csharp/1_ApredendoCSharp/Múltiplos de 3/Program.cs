using System;

namespace Múltiplos_de_3
{
    internal class Program
    {
        static void Main(string[] args)
        {

            for (int contador = 0; contador <= 100; contador++)
            {
                if (contador % 3 == 0)
                    Console.WriteLine(contador);
            }

            Console.ReadLine();

        }
    }
}
