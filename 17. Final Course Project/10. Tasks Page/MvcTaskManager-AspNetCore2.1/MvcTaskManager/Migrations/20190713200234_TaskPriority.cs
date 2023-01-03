using Microsoft.EntityFrameworkCore.Migrations;

namespace MvcTaskManager.Migrations
{
    public partial class TaskPriority : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "TaskPriorities",
                columns: new[] { "TaskPriorityID", "TaskPriorityName" },
                values: new object[,]
                {
                    { 1, "Urgent" },
                    { 2, "Normal" },
                    { 3, "Below Normal" },
                    { 4, "Low" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "TaskPriorities",
                keyColumn: "TaskPriorityID",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "TaskPriorities",
                keyColumn: "TaskPriorityID",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "TaskPriorities",
                keyColumn: "TaskPriorityID",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "TaskPriorities",
                keyColumn: "TaskPriorityID",
                keyValue: 4);
        }
    }
}
