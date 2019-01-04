using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace MyDemoProject.Models
{
    public partial class MyDemoProjectContext : DbContext
    {
        public MyDemoProjectContext()
        {
        }

        public MyDemoProjectContext(DbContextOptions<MyDemoProjectContext> options)
            : base(options)
        {
        }

        public virtual DbSet<EmployeeData> EmployeeData { get; set; }
        public virtual DbSet<MotivationPhrase> MotivationPhrase { get; set; }
        public virtual DbSet<TaskData> TaskData { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=DESKTOP-I53I20Q\\SQLEXPRESS;Database=MyDemoProject;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<EmployeeData>(entity =>
            {
                entity.HasKey(e => e.EmployeeName);

                entity.Property(e => e.EmployeeName)
                    .HasMaxLength(50)
                    .ValueGeneratedNever();

                entity.Property(e => e.Address).HasMaxLength(50);

                entity.Property(e => e.Department).HasMaxLength(50);

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.Password).HasMaxLength(50);

                entity.Property(e => e.Phone)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Title).HasMaxLength(50);
            });

            modelBuilder.Entity<MotivationPhrase>(entity =>
            {
                entity.HasKey(e => e.PhraseId);

                entity.Property(e => e.PhraseId)
                    .HasMaxLength(10)
                    .ValueGeneratedNever();
            });

            modelBuilder.Entity<TaskData>(entity =>
            {
                entity.HasKey(e => e.TaskTitle);

                entity.Property(e => e.TaskTitle)
                    .HasMaxLength(50)
                    .ValueGeneratedNever();

                entity.Property(e => e.Dl)
                    .HasColumnName("DL")
                    .HasColumnType("datetime");

                entity.Property(e => e.EmployeeName).HasMaxLength(50);

                entity.Property(e => e.Status).HasMaxLength(10);

                entity.Property(e => e.TaskDescription).HasMaxLength(50);

                entity.HasOne(d => d.EmployeeNameNavigation)
                    .WithMany(p => p.TaskData)
                    .HasForeignKey(d => d.EmployeeName)
                    .HasConstraintName("FK_TaskData_EmployeeData");
            });
        }
    }
}
