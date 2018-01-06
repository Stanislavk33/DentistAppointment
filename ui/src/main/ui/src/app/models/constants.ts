export class Constants {

  public static readonly RESULT_SUCCESSFUL: string = "SUCCESS";
  public static readonly RESULT_FAILED: string = "FAIL";
  public static readonly RESULT_ERROR: string = "ERROR";

  public static readonly ROLE_ADMIN: string = "ADMIN";
  public static readonly ROLE_DENTIST: string = "DENTIST";
  public static readonly ROLE_PATIENT: string = "PATIENT";

  public static readonly TYPE_NORMAL: string = "NORMAL";
  public static readonly TYPE_ORTHODONT: string = "ORTHODONT";
  public static readonly TYPE_SURGEON: string = "SURGEON";

  public static readonly CITY_SOFIA: string = "Sofia";
  public static readonly CITY_VARNA: string = "Varna";
  public static readonly CITY_PLOVDIV: string = "Plovdiv";
  public static readonly CITY_BURGAS: string = "Burgas";

  public static readonly SESSION_USER: string = "currentUser";

  public static readonly BLOCK_TRESHHOLD: number = 4;
  public static readonly HOURS: string[] = ['8:00','8:30','9:00','9:30','10:00','10:30','11:00','11:30','12:00',
                                             '12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00'];

   public static readonly WEEK_DAYS: string[] = ["Monday",
                                                 "Tuesday",
                                                 "Wednesday",
                                                 "Thursday",
                                                 "Friday",
                                                 "Saturday",
                                                 "Sunday"];
   public static readonly WEEK_DAYS_UPPERCASE: string[] = ["MONDAY",
                                                           "TUESDAY",
                                                           "WEDNESDAY",
                                                           "THURSDAY",
                                                           "FRIDAY",
                                                           "SATURDAY",
                                                           "SUNDAY"];
   public static readonly WORKING_HOURS: string[] = ["00:00",
                                                     "00:30",
                                                     "01:00",
                                                     "01:30",
                                                     "02:00",
                                                     "02:30",
                                                     "03:00",
                                                     "03:30",
                                                     "04:00",
                                                     "04:30",
                                                     "05:00",
                                                     "05:30",
                                                     "06:00",
                                                     "06:30",
                                                     "07:00",
                                                     "07:30",
                                                     "08:00",
                                                     "08:30",
                                                     "09:00",
                                                     "09:30",
                                                     "10:00",
                                                     "10:30",
                                                     "11:00",
                                                     "11:30",
                                                     "12:00",
                                                     "12:30",
                                                     "13:00",
                                                     "13:30",
                                                     "14:00",
                                                     "14:30",
                                                     "15:00",
                                                     "15:30",
                                                     "16:00",
                                                     "16:30",
                                                     "17:00",
                                                     "17:30",
                                                     "18:00",
                                                     "18:30",
                                                     "19:00",
                                                     "19:30",
                                                     "20:00",
                                                     "20:30",
                                                     "21:00",
                                                     "21:30",
                                                     "22:00",
                                                     "22:30",
                                                     "23:00",
                                                     "23:30"];
   public static readonly PATIENT_BLACKLISTED_SUCCESSFULLY: string =
         "The patient was added to your blacklist successfully.";
   public static readonly PATIENT_UNBLACKLISTED_SUCCESSFULLY: string =
         "The patient was removed from your blacklist successfully.";
}
