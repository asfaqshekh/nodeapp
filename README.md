
#  Node.js Application Deployment on AWS ECS using Terraform

This project demonstrates how to containerize a simple Node.js application and deploy it on **AWS ECS Fargate** using **modular Terraform code**. It includes the setup of a secure IAM user, ECR for image storage, ECS cluster and task definition, and application deployment behind an Application Load Balancer.

---

## 🌐 Application Overview

A basic Node.js app is created using `server.js` that runs on port `3000` and displays a friendly welcome message when accessed.


## ☁️ AWS IAM User Setup

1. **Create IAM User (Programmatic Access Only)**
2. **Attach Permissions:**
   - `AmazonEC2ContainerRegistryAccess`
   - `AmazonECSAccess`
   - `CloudWatchLogAccess`
   - `IAMReadOnlyAccess`
   - **(Avoid `AdministratorAccess`)**

3. **Generate Access Key and Secret**

4. **Configure CLI**:
aws configure
# Enter Access Key, Secret Key
# Region: ap-south-1 (or your preferred region)
# Output: json
---

## 📁 Terraform Structure
.
├── Dockerfile
├── server.js
├── package.json
├── terraform/
│   ├── provider.tf
│   ├── main.tf
│   ├── locals.tf
│   ├── terraform.tfvars
│   ├── modules/
│   │   ├── ecr/
│   │   │   ├── ecr.tf
│   │   │   ├── variables.tf
│   │   │   └── output.tf
│   │   └── ecs/
│   │       ├── ecs.tf
│   │       ├── data.tf
│   │       ├── variables.tf
│   │       └── output.tf
```

---

## ⚙️ Terraform Steps

> Navigate into the `terraform/` directory before running these:

terraform init       # Initialize Terraform
terraform validate   # Validate configuration
terraform plan       # Review changes
terraform apply      # Apply changes


---

## 📌 After Deployment

Once the infrastructure is provisioned successfully:

- Go to the AWS Console
- Open the **Load Balancer DNS**
- Paste it in your browser

You will see:


Hello Friends!
Welcome to Node.js App
Enjoy!!!!!!!!!!!!!!!!


---

##  Final Notes

- Make sure your **Docker image is pushed to ECR** before applying ECS.
- Use Terraform modules and meaningful variable names.
- Keep secrets (like AWS keys) out of Git repositories.

---

## Enjoy
Deployment complete! 
