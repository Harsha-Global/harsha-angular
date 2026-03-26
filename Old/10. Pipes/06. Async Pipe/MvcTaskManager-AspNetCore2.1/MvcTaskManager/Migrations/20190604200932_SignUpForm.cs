using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MvcTaskManager.Migrations
{
    public partial class SignUpForm : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CountryID",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "DateOfBirth",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Gender",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "ReceiveNewsLetters",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateTable(
                name: "Countries",
                columns: table => new
                {
                    CountryID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CountryName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Countries", x => x.CountryID);
                });

            migrationBuilder.CreateTable(
                name: "Skills",
                columns: table => new
                {
                    SkillID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    SkillName = table.Column<string>(nullable: true),
                    SkillLevel = table.Column<string>(nullable: true),
                    Id = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Skills", x => x.SkillID);
                    table.ForeignKey(
                        name: "FK_Skills_AspNetUsers_Id",
                        column: x => x.Id,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "Countries",
                columns: new[] { "CountryID", "CountryName" },
                values: new object[,]
                {
                    { 1, "China" },
                    { 123, "Lebanon" },
                    { 124, "Palestine" },
                    { 125, "Croatia" },
                    { 126, "Bosnia and Herzegovina" },
                    { 127, "Kuwait" },
                    { 128, "Moldova" },
                    { 129, "Liberia" },
                    { 130, "Mauritania" },
                    { 131, "Panama" },
                    { 122, "Republic of the Congo" },
                    { 132, "Uruguay" },
                    { 134, "Lithuania" },
                    { 135, "Albania" },
                    { 136, "Oman" },
                    { 137, "Mongolia" },
                    { 138, "Jamaica" },
                    { 139, "Lesotho" },
                    { 140, "Namibia" },
                    { 141, "Macedonia" },
                    { 142, "Slovenia" },
                    { 133, "Armenia" },
                    { 143, "Latvia" },
                    { 121, "New Zealand" },
                    { 119, "Ireland" },
                    { 99, "Serbia" },
                    { 100, "Papua New Guinea" },
                    { 101, "Paraguay" },
                    { 102, "Laos" },
                    { 103, "Libya" },
                    { 104, "Jordan" },
                    { 105, "Sierra Leone" },
                    { 106, "Togo" },
                    { 107, "El Salvador" },
                    { 120, "Georgia" },
                    { 108, "Nicaragua" },
                    { 110, "Denmark" },
                    { 111, "Kyrgyzstan" },
                    { 112, "Slovakia" },
                    { 113, "Finland" },
                    { 114, "Singapore" },
                    { 115, "Turkmenistan" },
                    { 116, "Norway" },
                    { 117, "Costa Rica" },
                    { 118, "Central African Republic" },
                    { 109, "Eritrea" },
                    { 144, "Botswana" },
                    { 145, "Qatar" },
                    { 146, "Gambia" },
                    { 172, "Iceland" },
                    { 173, "Belize" },
                    { 174, "Barbados" },
                    { 175, "Vanuatu" },
                    { 176, "Samoa" },
                    { 177, "Saint Lucia" },
                    { 178, "Kiribati" },
                    { 179, "Grenada" },
                    { 180, "Tonga" },
                    { 171, "Maldives" },
                    { 181, "Federated States of Micronesia" },
                    { 183, "Seychelles" },
                    { 184, "Antigua and Barbuda" },
                    { 185, "Andorra" },
                    { 186, "Dominica" },
                    { 187, "Liechtenstein" },
                    { 188, "Monaco" },
                    { 189, "San Marino" },
                    { 190, "Palau" },
                    { 191, "Tuvalu" },
                    { 182, "Saint Vincent and the Grenadines" },
                    { 170, "Bahamas" },
                    { 169, "Brunei" },
                    { 168, "Malta" },
                    { 147, "Gabon" },
                    { 148, "Guinea-Bissau" },
                    { 149, "Trinidad and Tobago" },
                    { 150, "Estonia" },
                    { 151, "Mauritius" },
                    { 152, "Swaziland" },
                    { 153, "Bahrain" },
                    { 154, "Timor-Leste" },
                    { 155, "Cyprus" },
                    { 156, "Fiji" },
                    { 157, "Djibouti" },
                    { 158, "Guyana" },
                    { 159, "Equatorial Guinea" },
                    { 160, "Bhutan" },
                    { 161, "Comoros" },
                    { 162, "Montenegro" },
                    { 163, "Western Sahara" },
                    { 164, "Suriname" },
                    { 165, "Luxembourg" },
                    { 166, "Solomon Islands" },
                    { 167, "Cape Verde" },
                    { 98, "Bulgaria" },
                    { 192, "Nauru" },
                    { 97, "Tajikistan" },
                    { 95, "Switzerland" },
                    { 26, "Spain" },
                    { 27, "Colombia" },
                    { 28, "Ukraine" },
                    { 29, "Tanzania" },
                    { 30, "Argentina" },
                    { 31, "Kenya" },
                    { 32, "Poland" },
                    { 33, "Algeria" },
                    { 34, "Canada" },
                    { 25, "Myanmar" },
                    { 35, "Uganda" },
                    { 37, "Morocco" },
                    { 38, "Sudan" },
                    { 39, "Peru" },
                    { 40, "Malaysia" },
                    { 41, "Uzbekistan" },
                    { 42, "Saudi Arabia" },
                    { 43, "Venezuela" },
                    { 44, "Nepal" },
                    { 45, "Afghanistan" },
                    { 36, "Iraq" },
                    { 46, "Ghana" },
                    { 24, "South Korea" },
                    { 22, "Italy" },
                    { 2, "United States" },
                    { 3, "Indonesia" },
                    { 4, "Brazil" },
                    { 5, "Pakistan" },
                    { 6, "Nigeria" },
                    { 7, "Bangladesh" },
                    { 8, "Russia" },
                    { 9, "Japan" },
                    { 10, "Mexico" },
                    { 23, "South Africa" },
                    { 11, "Philippines" },
                    { 13, "Ethiopia" },
                    { 14, "Egypt" },
                    { 15, "Germany" },
                    { 16, "Iran" },
                    { 17, "Turkey" },
                    { 18, "Democratic Republic of the Congo" },
                    { 19, "Thailand" },
                    { 20, "France" },
                    { 21, "United Kingdom" },
                    { 12, "Vietnam" },
                    { 47, "Yemen" },
                    { 48, "North Korea" },
                    { 49, "Mozambique" },
                    { 75, "Guinea" },
                    { 76, "Greece" },
                    { 77, "Tunisia" },
                    { 78, "Portugal" },
                    { 79, "Rwanda" },
                    { 80, "Czech Republic" },
                    { 81, "Haiti" },
                    { 82, "Bolivia" },
                    { 83, "Somalia" },
                    { 74, "Belgium" },
                    { 84, "Hungary" },
                    { 86, "Sweden" },
                    { 87, "Belarus" },
                    { 88, "Dominican Republic" },
                    { 89, "Azerbaijan" },
                    { 90, "Austria" },
                    { 91, "Honduras" },
                    { 92, "United Arab Emirates" },
                    { 93, "South Sudan" },
                    { 94, "Burundi" },
                    { 85, "Benin" },
                    { 73, "Cuba" },
                    { 72, "Chad" },
                    { 71, "Zimbabwe" },
                    { 50, "Taiwan" },
                    { 51, "Australia" },
                    { 52, "Syria" },
                    { 53, "Ivory Coast" },
                    { 54, "Madagascar" },
                    { 55, "Angola" },
                    { 56, "Sri Lanka" },
                    { 57, "Cameroon" },
                    { 58, "Romania" },
                    { 59, "Kazakhstan" },
                    { 60, "Netherlands" },
                    { 61, "Chile" },
                    { 62, "Niger" },
                    { 63, "Burkina Faso" },
                    { 64, "Ecuador" },
                    { 65, "Guatemala" },
                    { 66, "Mali" },
                    { 67, "Malawi" },
                    { 68, "Senegal" },
                    { 69, "Cambodia" },
                    { 70, "Zambia" },
                    { 96, "Israel" },
                    { 193, "Vatican City" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Skills_Id",
                table: "Skills",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Countries");

            migrationBuilder.DropTable(
                name: "Skills");

            migrationBuilder.DropColumn(
                name: "CountryID",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "DateOfBirth",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Gender",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "ReceiveNewsLetters",
                table: "AspNetUsers");
        }
    }
}
