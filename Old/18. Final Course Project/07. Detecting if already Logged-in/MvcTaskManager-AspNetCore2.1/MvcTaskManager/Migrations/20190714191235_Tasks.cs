using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MvcTaskManager.Migrations
{
    public partial class Tasks : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Tasks",
                columns: table => new
                {
                    TaskID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    TaskName = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    CreatedOn = table.Column<DateTime>(nullable: false),
                    ProjectID = table.Column<int>(nullable: false),
                    CreatedBy = table.Column<string>(nullable: true),
                    AssignedTo = table.Column<string>(nullable: true),
                    TaskPriorityID = table.Column<int>(nullable: false),
                    LastUpdatedOn = table.Column<DateTime>(nullable: false),
                    CurrentStatus = table.Column<string>(nullable: true),
                    CurrentTaskStatusID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tasks", x => x.TaskID);
                    table.ForeignKey(
                        name: "FK_Tasks_AspNetUsers_AssignedTo",
                        column: x => x.AssignedTo,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Tasks_AspNetUsers_CreatedBy",
                        column: x => x.CreatedBy,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Tasks_Projects_ProjectID",
                        column: x => x.ProjectID,
                        principalTable: "Projects",
                        principalColumn: "ProjectID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Tasks_TaskPriorities_TaskPriorityID",
                        column: x => x.TaskPriorityID,
                        principalTable: "TaskPriorities",
                        principalColumn: "TaskPriorityID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TaskStatusDetails",
                columns: table => new
                {
                    TaskStatusDetailID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    TaskID = table.Column<int>(nullable: false),
                    TaskStatusID = table.Column<int>(nullable: false),
                    UserID = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    StatusUpdationDateTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TaskStatusDetails", x => x.TaskStatusDetailID);
                    table.ForeignKey(
                        name: "FK_TaskStatusDetails_Tasks_TaskID",
                        column: x => x.TaskID,
                        principalTable: "Tasks",
                        principalColumn: "TaskID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TaskStatusDetails_TaskStatuses_TaskStatusID",
                        column: x => x.TaskStatusID,
                        principalTable: "TaskStatuses",
                        principalColumn: "TaskStatusID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TaskStatusDetails_AspNetUsers_UserID",
                        column: x => x.UserID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Tasks_AssignedTo",
                table: "Tasks",
                column: "AssignedTo");

            migrationBuilder.CreateIndex(
                name: "IX_Tasks_CreatedBy",
                table: "Tasks",
                column: "CreatedBy");

            migrationBuilder.CreateIndex(
                name: "IX_Tasks_ProjectID",
                table: "Tasks",
                column: "ProjectID");

            migrationBuilder.CreateIndex(
                name: "IX_Tasks_TaskPriorityID",
                table: "Tasks",
                column: "TaskPriorityID");

            migrationBuilder.CreateIndex(
                name: "IX_TaskStatusDetails_TaskID",
                table: "TaskStatusDetails",
                column: "TaskID");

            migrationBuilder.CreateIndex(
                name: "IX_TaskStatusDetails_TaskStatusID",
                table: "TaskStatusDetails",
                column: "TaskStatusID");

            migrationBuilder.CreateIndex(
                name: "IX_TaskStatusDetails_UserID",
                table: "TaskStatusDetails",
                column: "UserID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TaskStatusDetails");

            migrationBuilder.DropTable(
                name: "Tasks");
        }
    }
}
