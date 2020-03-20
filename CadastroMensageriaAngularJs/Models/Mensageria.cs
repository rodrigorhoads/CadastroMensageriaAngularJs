using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CadastroMensageriaAngularJs.Models
{
    public class Mensageria
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdMensageria { get; set; }
        [Required]
        public string Nome { get; set; }
        [Required]
        public string Mensagem { get; set; }

        public bool Ativo { get; set; }

        public Segmento Segmento { get; set; }

        public int IdMensageriaTemplate { get; set; }

        public string Racf { get; set; }

        public DateTime DataCadastro { get; set; }

        public MensageriaTemplate Template { get; set; }
    }

    public enum Segmento
    {
        [Description("CLASSIC")]
        CLASSIC,
        [Description("PERSONALITTÉ")]
        PERSONALITTE
    }
}