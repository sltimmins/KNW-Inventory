//
//  PasswordPageViewController.swift
//  KNWInventory
//
//  Created by Kevin Leong on 6/12/21.
//

import UIKit

class PasswordPageViewController: UIViewController {

    @IBOutlet weak var passwordField: UITextField!
    @IBOutlet weak var submitButton: UIButton!
    
    var password: String?
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        self.password = passwordField.text
        let testHomeVC = segue.destination as! TestHomeViewController
        testHomeVC.password = self.password
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
