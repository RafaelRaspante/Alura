using System;

namespace _5_CaracteresETextos
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Executando o projeto 5 Caracteres e textos");

            char primeiraletra = 'a';
            Console.WriteLine(primeiraletra);

            primeiraletra = (char)61;
            Console.WriteLine(primeiraletra);


            primeiraletra = (char)(primeiraletra + 1);
            Console.WriteLine(primeiraletra);


            string titulo = "Alura Cursos de tecnologia " + 2020;
            string cursosProgramacao =
@"- .NET 
- Java
- Javascript";
            Console.WriteLine(titulo);
            Console.WriteLine(cursosProgramacao);

            Console.ReadLine();
        }
    }
}
