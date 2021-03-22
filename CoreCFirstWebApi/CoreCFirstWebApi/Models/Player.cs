using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CoreCFirstWebApi.Models
{
    [Table("Players")]
    public class Player
    {
        [Key]
        public int PId { get; set; }
        [Required]
        [Column(TypeName ="varchar(50)",Order =1)]
        public string PName { get; set; }
        [Required]
        [Column(TypeName = "varchar(50)", Order = 2)]
        public string PTeam { get; set; }
    }
}
