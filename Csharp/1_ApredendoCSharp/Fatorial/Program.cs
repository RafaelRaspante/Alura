﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fatorial
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int fatorial = 1;

            for (int i = 1; i < 11; i++)
            {
                fatorial *= i;
                Console.WriteLine("O fatorial de " + i + " = " + fatorial);

            }

            Console.ReadLine();

        }
    }
}
