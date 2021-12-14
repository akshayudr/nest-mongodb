import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { ProjectModule } from './project/project.module';
import { EmployeeModule } from './employee/employee.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { JobModule } from './job/job.module';
import { CandidateModule } from './candidate/candidate.module';
import { UploadModule } from './upload/upload.module';
import { TrainingModule } from './training/training.module';
import { SettingsModule } from './settings/settings.module';
import { AttendanceModule } from './attendance/attendance.module';
import { TimesheetModule } from './timesheet/timesheet.module';
import { LeaveModule } from './leave/leave.module';
import { AssetModule } from './asset/asset.module';
import { ContactModule } from './contact/contact.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [AdminModule, AuthModule, ProjectModule, EmployeeModule, DashboardModule, JobModule, CandidateModule, UploadModule, TrainingModule, SettingsModule, AttendanceModule, TimesheetModule, LeaveModule, AssetModule, ContactModule, ProductsModule, MongooseModule.forRoot('mongodb+srv://mongoUser:wc4S1NLpVHrsPESQ@cluster0.tvtuj.mongodb.net/nest-mongodb?retryWrites=true&w=majority') ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
