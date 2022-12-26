using System;

namespace _10_CalculaPoupanca
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Executando projeto 10 - Calcula poupança");


            double valorinvestido = 1000;
            int contadorMes = 1;

            while (contadorMes <= 12)
            {
                valorinvestido = valorinvestido + valorinvestido * 0.005;
                Console.WriteLine("Após " + contadorMes + " meses, você terá R$ " + valorinvestido);
                contadorMes++;

            }

            Console.ReadLine();
        }
    }
}
