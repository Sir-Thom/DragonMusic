using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using Microsoft.IdentityModel.Tokens;
using Swashbuckle.AspNetCore.Filters;

var builder = WebApplication.CreateBuilder(args);
// set default address ip and port



// Add services to the container.
builder.Services.Configure<KestrelServerOptions>(options =>
{
    options.ListenAnyIP(5000);

    // default is 30 MB
    options.Limits.MaxRequestBodySize = int.MaxValue;
});

builder.Services.Configure<FormOptions>(options =>
{
    options.ValueLengthLimit = int.MaxValue;
    options.MultipartBoundaryLengthLimit = int.MaxValue;
    options.MultipartBodyLengthLimit = int.MaxValue; //Default is 128MB
    options.MultipartHeadersLengthLimit = int.MaxValue;
});


builder.Services.AddControllers();

//builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
//{
//    options.TokenValidationParameters = new TokenValidationParameters
//    {
//        ValidateIssuerSigningKey = true,
//        IssuerSigningKey = new SymmetricSecurityKey
//            (
//                System.Text.Encoding.UTF8.GetBytes(builder.Configuration.GetSection("TokenPassKey").Value)
//            ),
//        ValidateIssuer = false,
//        ValidateAudience = false
//    };
//});
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("oauth2", new Microsoft.OpenApi.Models.OpenApiSecurityScheme
    {
        In = Microsoft.OpenApi.Models.ParameterLocation.Header,
        Name = "Authorization",
        Type = Microsoft.OpenApi.Models.SecuritySchemeType.ApiKey
    });
    options.OperationFilter<SecurityRequirementsOperationFilter>();
});

var corsSettings = builder.Configuration.GetSection("CorsSettings");

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        policy =>
        {
            policy.WithOrigins(corsSettings["AllowedOrigins"])
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
        }
    );
});
builder.Services.AddHttpContextAccessor();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseHttpsRedirection();
}
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();
app.UseAuthentication();
app.UseAuthorization();
app.UseCors("AllowAnyOrigin");
app.MapControllers();

app.Run();